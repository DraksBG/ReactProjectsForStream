import React from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import "../Header.css";

const HeaderIcon = () => {
    return (
        <Link
            to="/"
            style={{
                textDecoration: "none",
            }}
        >
            <div className="header-logo">
                <StorefrontIcon
                    className="header-logo-image"
                    fontSize="large"
                />
                <h2 className="header-logo-title">eShop</h2>
            </div>
        </Link>
    );
};

export default HeaderIcon;
