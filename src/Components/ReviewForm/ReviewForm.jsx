import { useReducer } from "react"
import React from "react"
import { Rating } from "../Rating/Rating"
import { star_size } from "../../Content/Rating/star_size"

const initialValue = {
name: "",
review: "",
rating: 0,
}

const reducer = (state, action) => {
switch(action.type) {
case "SetName": {
    return {
        ...initialValue, name:action.payload 
    }};
case "SetReview": {
    return{
        ...state, review: action.payload
    }};
case "SetRating": {
    return{
        ...state, rating: action.payload
    }};
default:{ 
    return state; 
}
}}

export const ReviewForm = () => {
const [ formValue, dispatch ] = useReducer(reducer, initialValue);

return (
<div>
    <div>
    <label>Name</label>
    <input value={formValue.name} onChange={({target: {value}}) => dispatch({ type: "SetName", payload: value })}/>
    </div>

    <div>
    <label>Review</label>
    <input value={formValue.review} onChange={({target: {value}})=> dispatch({type: "SetReview", payload: value })}/>
    </div>

    <div>
    <label>Rating</label>
    <Rating
     Size={star_size.l}
     value={formValue.rating}
     onChange={(value) => dispatch({type: 'SetRating', payload: value})}/>
    </div>
</div>
)}