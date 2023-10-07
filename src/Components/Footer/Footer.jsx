import React from 'react'
import styles from "./styles.module.css"

export const Footer = () => {
return (
<div className={styles.root}>
    <div className={styles.info}>
        <div className={styles.info1}>
            <h4>ZÁKAZNICKÁ PODPORA & PRESS</h4>
            <span>
            Email: info@yerba.eu <br/>
            Tel: +420 776 774 985 <br/>
            9:00 - 23:00</span>
        </div>
        <div className={styles.info2}>
            <h4>O NÁS</h4>
            <span>
            Společnost GOURMET PARTNERS s.r.o je evropským lídrem v oblasti vývoje, výroby a distribuce energetické nápojů.<br/>
            Sídlo společnosti: GOURMET PARTNERS, s.r.o. <br/> 
            Ohradní 4424/63a Prague, 440 00 CZ
            </span>
        </div>
    </div>
        <div className={styles.copyright}>
            <p className={styles.copyrightText}>
                COPYRIGHT © 2023 GOURMET PARTNERS S.R.O. ALL RIGHTS RESERVED</p>
        </div>
</div>
)}


