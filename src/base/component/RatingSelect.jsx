import React from 'react'
import {nanoid} from 'nanoid'
import { useContext } from 'react'
import Feedbackcontext from '../context/FeedbackProvider'

function RatingSelect() {
  const {newRating,ratingHandler}=useContext(Feedbackcontext)
  let ratingArr=[1,2,3,4,5,6,7,8,9,10]
  let listElement=
ratingArr.map((item)=>{
  return(
    <li key={nanoid()}>
      <input type="radio" name="rate" id={item.toString()} value={item} checked={newRating===item} onChange={(e)=>ratingHandler(e)}></input>
      <label htmlFor={item.toString()}>{item}</label>
    </li>
  )
})
  return (

        <ul className='rating'>
          {listElement}
        </ul>
  )
}


export default RatingSelect

