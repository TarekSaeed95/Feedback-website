
import Feedbackcontext from '../context/FeedbackProvider'

import { useContext } from "react";
function FeedbackStats() {
  const {feedback}=useContext(Feedbackcontext)
    let ratings=0;
    let ratingCounter=feedback.length
    feedback.forEach(el=>{
       ratings+= el.rating
    })
    let average=(ratings/ratingCounter).toFixed(1).replace(/.0$/, '')
  return (
    <div className="feedback-stats">
      <h2>{ratingCounter} Reviews</h2>
      <h2>Average rating: {!isNaN(average)?average:"no ratings yet.."}</h2>
    </div>
  )
}

export default FeedbackStats
