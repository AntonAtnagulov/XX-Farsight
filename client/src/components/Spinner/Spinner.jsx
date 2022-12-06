import React from 'react';
import {useSelector} from 'react-redux'
import BarLoader from "react-spinners/BarLoader";
import style from './spinner.module.css'

export default function Spinner() {
    const spinner = useSelector((state) => state.toolkit.spinner);
    return (
        <div style={{visibility: spinner}} className={style.spinnerBox}>
            <BarLoader  color="#ffffff" />
        </div>
    );
}
