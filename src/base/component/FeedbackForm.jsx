import React from 'react'
import Card from '../shared/Card'
import Button from "../shared/Button"
import RatingSelect from './RatingSelect'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import Feedbackcontext from '../context/FeedbackProvider'

function FeedbackFrom() {
const {editId,editMode,submitHandler,newRating,text,isdisabled,minLetterMsg,inputHandler}=useContext(Feedbackcontext)

function submitAction(id,text,newRating){
  
  submitHandler(id,text,newRating)  

}
  return (
    <Card>
    <div className=''>
      <form >
        <h2 className=''>How would you rate your service with us.!!</h2>
        <RatingSelect />
        <div className="input-group">
          <input
           type="text"
            name="feedback" 
            value={text}
            placeholder='Write a review'
             onChange={inputHandler}/>
             <Button 
             isdisabled={isdisabled}
              version={"primary"}
               editMode={editMode}
                editClickHandler
                  type={"submit"} submitHandler={editMode?()=>submitAction(editId,text,newRating):()=>submitAction(nanoid(),text,newRating)}>
              Send
             </Button>
        </div>
          {minLetterMsg&&<div className='message'>Feedback is at least 10 letters</div>}
      </form>
    </div>
    </Card>
  )
}

FeedbackFrom.propTypes = {

}

export default FeedbackFrom

