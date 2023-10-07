import React, { useEffect, useState} from "react";
import { images } from "../../constants/images"; 
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectDrinkIsLoading } from "../../store/entities/drink/selectors";
import { loadDrinksThunk } from "../../store/entities/drink/thunks/loadDrinksThunk";
import { Image } from "../../Components/Images/Image";
import { Outlet, useParams } from "react-router-dom";
import { Reviews } from "../../Components/Reviews/Reviews";
import { DrinkTabs } from "../../Components/DrinkTabs/DrinkTabs"

export const ProductPage = () => {

const [img, setImg] = useState(0)

const {drinkId} = useParams()
const dispatch = useDispatch();
const isLoading = useSelector(selectDrinkIsLoading);

useEffect(() => {
dispatch(loadDrinksThunk(1))
}, [])

if(isLoading){
return ( 
<div className={styles.loading}>
<div className={styles.loadingText}>
    <span class="loading-text-words">L</span>
    <span class="loading-text-words">O</span>
    <span class="loading-text-words">A</span>
    <span class="loading-text-words">D</span>
    <span class="loading-text-words">I</span>
    <span class="loading-text-words">N</span>
    <span class="loading-text-words">G</span>
</div>
</div>
)}
return (
<div>
    <div className={styles.root}>
        <DrinkTabs className={styles.tabs}/>
        <Image image={images.find(({id}) => id === drinkId) || images[img]}/>
        <Outlet />
    </div>
    <div>
        <Reviews drinkId={drinkId} className={styles.review}/>
    </div>
</div>
)}