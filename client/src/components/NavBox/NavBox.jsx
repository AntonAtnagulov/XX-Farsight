import React from "react";
import style from "./navBox.module.css";

export default function NavBox() {
    return (
        <div className={style.logoBox}>
            <a href="https://www.patreon.com/FableTable">
                <img src="./images/FableTableLogoSq.png" height="130px" alt="logo"></img>
            </a>
        </div>
    );
}

// style={{right: width - (width - 30)}}
