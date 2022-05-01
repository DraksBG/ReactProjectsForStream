import React from "react";
import Product from "../Product/Product";
import { products } from "../../utils/_moks";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <img
                    src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                    alt="some-image-to-dispaly"
                    className="home-image"
                />
                <div className="home-items">
                    {products.map((product) => {
                        return (
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                                key={product.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
