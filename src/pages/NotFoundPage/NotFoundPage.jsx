import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

export const NotFoundPage = () => {
  return (
<div className={styles.root}>
<div className={styles.top}>
  <h1 className={styles.h1}>404</h1>
  <h3 className={styles.h3}>page not found</h3>
</div>
<div className={styles.container}>
  <div className={styles.ghostCopy}>
    <div className={styles.one}></div>
    <div className={styles.two}></div>
    <div className={styles.three}></div>
    <div className={styles.four}></div>
  </div>
  <div className={styles.ghost}>
    <div className={styles.face}>
      <div className={styles.eye}></div>
      <div className={styles.eyeRight}></div>
      <div className={styles.mouth}></div>
    </div>
  </div>
  <div className={styles.shadow}></div>
</div>
<div className={styles.bottom}>
  <p>Boo, looks like a ghost stole this page!</p>
  <form className={styles.search}>
    <input type="text" className={styles.searchBar} placeholder="Search"/>
    <button type="submit" className={styles.searchBtn}>
      <i ></i>
    </button>
  </form>
  <div className={styles.buttons}>
    <Link to="/drinks"><button className={styles.btn}>Back</button></Link>
    <Link to="/drinks"> <button className={styles.btn}>Home</button></Link>
  </div>
</div>

</div>
)}

