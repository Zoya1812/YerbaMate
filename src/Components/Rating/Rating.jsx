import classNames from "classnames"
import black_star from "../../Content/Rating/R (1).png"
import white_star from "../../Content/Rating/R.png"
import styles from "./styles.module.css"
import { star_size } from "../../Content/Rating/star_size"

export const Rating = ({
    maxRating=5, Size = star_size.m, onChange, value, className
}) => {
return(
<div className={styles.rating}>
    { maxRating > 0 && new Array (maxRating)
    .fill(null)
    .map((_, index) => (
        <img 
        src={ index >= value ? white_star : black_star }
        alt={ index >= value ? "white" : "black"}
        onClick={() => onChange?.(index + 1)}
        className={classNames(styles.star, styles[Size])}
        />
    ))}
</div>
)}