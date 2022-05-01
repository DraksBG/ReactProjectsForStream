import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Header.css";

const HeaderSearch = () => {
    return (
        <div className="header-search">
            <input type="text" className="header-search-input" />
            <SearchIcon className="header-search-icon" />
        </div>
    );
};

export default HeaderSearch;
