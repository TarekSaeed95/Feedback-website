import React from 'react'
import PropTypes from 'prop-types'
import Card from '../shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from 'react'
import Feedbackcontext from '../context/FeedbackProvider'


function FeedbackItem(props) {
  const {closeClickHandler,editClickHandler}=useContext(Feedbackcontext)
  return (
    <AnimatePresence>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: .5 }}
    layout
    >

      <Card>
        <div className='text-display'>{props.text}</div>
        <button className='close' onClick={()=>closeClickHandler(props.id)}>
        <FaTimes color='purple' ></FaTimes>
        </button>
        <button className='edit' onClick={()=>editClickHandler(props.id)}>
        <FaEdit color='purple'></FaEdit>
        </button>
        <div className='num-display'>{props.rating}</div>
      </Card>
      </motion.div>
      </AnimatePresence>

  )
}

FeedbackItem.defaultProps={
  text:"",
  rating:5
}
FeedbackItem.propTypes = {
  id:PropTypes.any.isRequired,
  text:PropTypes.string.isRequired,
  rating:PropTypes.number,
}

export default FeedbackItem

