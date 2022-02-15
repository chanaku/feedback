import React, { useState } from 'react'
import {v4 as uuid4} from 'uuid'
import FeedbackList from './Components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Header from './Components/Header'
import FeedbackStates from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'

function App() {
const[feedback, setFeedback] =useState(FeedbackData)

    const addFeedback=(newFeedback)=>{
      newFeedback.id=uuid4()
      setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback =(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
        
    }
  return (
      <>
      <Header />
    <div className="container">
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStates feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  )
}

export default App
