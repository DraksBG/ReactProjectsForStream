import React from "react";
import "./Header.css";

// Components
import HeaderSearch from "./AdditionalComponents/HeaderSearch";
import HeaderIcon from "./AdditionalComponents/HeaderIcon";
import HeaderNavItems from "./AdditionalComponents/HeaderNavItems";

const Header = () => {
    return (
        <div className="header">
            <HeaderIcon />
            <HeaderSearch />
            <HeaderNavItems />
        </div>
    );
};

export default Header;
