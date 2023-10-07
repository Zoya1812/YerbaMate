import React, { useEffect } from 'react'
import { Review } from '../Review/Review'
import styles from "./styles.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectDrinkReviewsById } from '../../store/entities/drink/selectors'
import { loadReviewsThunk } from '../../store/entities/reviews/thunk/loadReviewsThunk'
import { loadUsersThunk } from '../../store/entities/users/thunks/loadUsersThunk'
import { useParams } from 'react-router-dom'

export const Reviews = () => {
const { drinkId } = useParams()
const dispatch = useDispatch();
const reviews = useSelector((state) => selectDrinkReviewsById(state, {drinkId}))

useEffect(() => {
  dispatch(loadReviewsThunk(drinkId))
  }, [drinkId])

useEffect(() => {
  dispatch(loadUsersThunk())
  }, [])

return (
<div className={styles.root} >
  <h3>Co o Yerba Mate Kombucha říkají naši zákazníci:</h3>
  <div>
    {reviews?.map((id) => (
      <Review reviewId={id}/>
    ))}
  </div>
</div>
)}
