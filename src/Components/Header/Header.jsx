import React from "react";
import style from "./Header.module.sass";
import HeaderInput from "./HeaderInput/HeaderInput";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <div className={style.mainLogo}></div>
            <div className={style.pageName}>Profile<br/>Page</div>
            <HeaderInput/>
            <HeaderMenu/>
        </div>
    )
};

export default Header;