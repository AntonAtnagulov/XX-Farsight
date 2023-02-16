import React from 'react';
import style from './navBox.module.css';

export default function NavBox() {
    const width = window.innerWidth > 420 ? '130px' : '55px';

    const linkHandler = () => window.location.href = "https://www.patreon.com/FableTable"

    return (
        <div onClick={linkHandler} className={style.logoBox}>
                <span style={{color: '#ffffff'}} className={style.linkText}>get model</span>
                <img
                    src="./images/FableTableLogoSq.png"
                    width={width}
                    alt="logo"
                ></img>
                <div>TEST</div>
        </div>
    );
}
