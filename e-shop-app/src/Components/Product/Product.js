import React from "react";
import "./Product.css";
// import { useStateValue } from "./StateProvider";

function Product({key, title, image, price, rating }) {
    // const [state, dispatch] = useStateValue();

    // const addToBasket = () => {
    //     dispatch({
    //         type: "ADD_TO_BASKET",
    //         item: {
    //             id: key,
    //             image: image,
    //             price: price,
    //             rating: rating,
    //         },
    //     });
    // };

    return (
        <div className="product" key={key}>
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} />

            <button onClick={() => {}}>Add to Basket</button>
        </div>
    );
}

export default Product;
