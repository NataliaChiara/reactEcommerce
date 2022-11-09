import React, { useState, useEffect } from "react";
import { getSingleItemCheckout } from '../../service/firebase/firestore';
import CheckoutItem from "./CheckoutItem";
import { useParams, Link } from "react-router-dom";


function Checkout2() {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getSingleItemCheckout(id)
            .then((respuestaDatos) => setData(respuestaDatos))
            .catch((errormsg) => {
                setError(errormsg.message);
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    useEffect(() => {
        document.title = `Checkout`;
    }, []);

    if (isLoading) {
        return (
            <>
                {error ? (
                    <div>
                        <h2>Error obteniendo los datos</h2>
                        <p>Error</p>
                    </div>
                ) : (
                    <div className="loader">
                        <h1>loading...</h1>
                    </div>
                )}
            </>
        );
    }

    return (
        <div className="CheckoutMainContainer">
            <div className="CheckoutContainer">
                <div className="CheckoutTop">
                    <h1>Purchase registry</h1>
                    <h2>
                        Your purchase id is: <span>{data.id}</span>
                    </h2>
                    <h3>Name: {data.buyer.name}</h3>
                    <h3>Email: {data.buyer.email}</h3>
                    <h3>Phone number: {data.buyer.phone}</h3>
                    <h3>Total: ${data.total}</h3>
                    <h2>Products</h2>
                </div>

                {data.items.map((items) => {
                    return (
                        <CheckoutItem
                            key={items.id}
                            img={items.img[0]}
                            name={items.name}
                            price={items.price}
                        />
                    );
                })}
                <Link className="CheckoutBackButton" to="/">
                    <h3>Back to browse</h3>
                </Link>
            </div>

        </div>
    );
}

export default Checkout2;