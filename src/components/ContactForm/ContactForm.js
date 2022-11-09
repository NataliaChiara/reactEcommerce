import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { createBuyOrder } from '../../service/firebase/firestore'


function ContactForm() {

    const context = useContext(CartContext)
    const { cart, totalQuantity, totalPrice, isInCart, addItem, removeItem } = context
    const navigate = useNavigate()

    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
    });

    function handleCheckout(event) {

        event.preventDefault();
        const orderData = {
            buyer: dataForm,
            items: cart,
            total: totalPrice,
        };
        createBuyOrder(orderData).then((orderid) => {
            alert('creaste la orden guachin')
            navigate(`/checkout/${orderid}`);
        });
    }

    function inputChangeHandler(evento) {
        let inputName = evento.target.name;
        let value = evento.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleCheckout}>
                <div className="form-item">
                    <label htmlFor="name"></label>
                    <input
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="telefono"></label>
                    <input
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email"></label>
                    <input
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="email"
                        placeholder="Correo"
                        required
                    />
                </div>
                <div className="totalPrice">
                    <span>Total Price ${totalPrice}</span>
                    <button type="submit" className="buyCartButton">
                        Purchase
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
