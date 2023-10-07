import { useSelector } from "react-redux";
import { star_size } from "../../Content/Rating/star_size";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css"
import { selectReviewById } from "../../store/entities/reviews/selectors";
import { User } from "../User/User";

export const Review = ({reviewId}) => {
   
const review = useSelector((state) => selectReviewById(state, { reviewId }));

if(!review){
    return null;
}

const {text, rating, userId} = review;

return (
<div className={styles.root}>
    <div >

        <div className={styles.header}>
            <User userId={userId}/>
            <div>{text}</div>
        </div>
        <Rating Size={star_size.s} value={rating}/>
    </div>
</div>
)}