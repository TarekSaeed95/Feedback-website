import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react'
import Feedbackcontext from '../context/FeedbackProvider'

function FeedbackList() {
  const {feedback}=useContext(Feedbackcontext)

    let feedElement= feedback.map(item=>{ return (
    <FeedbackItem 
      key={item.id} 
      id={item.id}
      text={item.text}
      rating={item.rating}
      />
      )})
    return(
    <div>
      {feedElement}
    </div>)

  
}

export default FeedbackList

