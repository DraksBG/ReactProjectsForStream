import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const HeaderNavItems = () => {
    return (
        <div className="header-nav">
            <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="nav-item">
                    <span className="nav-item-line-one">Hello Guest</span>
                    <span className="nav-item-line-two">Sign In</span>
                </div>
            </Link>
            <div className="nav-item">
                <span className="nav-item-line-one">Your</span>
                <span className="nav-item-line-two">Shop</span>
            </div>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
                <div className="nav-item-basket">
                    <div className="nav-item-basket">
                        <ShoppingBasketIcon />
                        <span className="nav-item-line-two nav-baske-count">
                            3{/* {basket.length} */}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HeaderNavItems;
