import React from 'react'
import style from './header.module.css'

export default function Header({text}) {
  return (
    <div className={style.headerBox}>
        <p className={style.name}>{text}</p>
    </div>
  )
}
