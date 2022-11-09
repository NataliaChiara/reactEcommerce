import { addDoc, collection, getDocs, query, where, documentId, writeBatch, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/index'

export async function createBuyOrder(orderData) {
    const collectionRef = collection(db, "orders")
    let respuesta = await addDoc(collectionRef, orderData)

    return respuesta.id
}

export async function getSingleItemCheckout(idParams) {
    const docRef = doc(db, "orders", idParams)
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id }
}

export const saveOrder = async (cart, orderObj, clearCart) => {
    try {

        const ids = cart.map(c => c.id);
        const productRef = collection(db, 'products');
        const batch = writeBatch(db);
        const outOfStock = [];

        const { docs } = await getDocs(query(productRef, where(documentId(), 'in', ids)));

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(c => c.id === doc.id);
            const prodQuantity = productAddedToCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
            }

        })

        if (outOfStock.length === 0) {
            const orderRef = collection(db, 'orders');

            const orderAdded = await addDoc(orderRef, orderObj);
            batch.commit();
            clearCart();
            return true
        } else {
            return outOfStock
        }

    } catch (error) {

    }
}

export default saveOrder