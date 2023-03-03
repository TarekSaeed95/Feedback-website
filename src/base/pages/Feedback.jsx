import {FeedbackProvider} from '../context/FeedbackProvider'
import Data from '../shared/Data'
import {useState} from 'react'
import FeedbackForm from '../component/FeedbackForm'
import FeedbackList from '../component/FeedbackList'
import FeedbackStats from '../component/FeedbackStats'
import { FaQuestion } from 'react-icons/fa'
import {Link} from "react-router-dom"
// import Feedbackcontext from './component/FeedbackProvider'
// import { useContext } from 'react'
function Feedback() {
  // const [data,setData]=useState(Data);
  // const {feedback}=useContext(Feedbackcontext)


  return (
    <FeedbackProvider>
    <div className='container'>
      <FeedbackForm/>
      <FeedbackStats/>
      <FeedbackList/>

      <Link className='about-link' to="/about"><FaQuestion  size={30}/></Link>
    </div>
    </FeedbackProvider>
  )
}

export default Feedback

