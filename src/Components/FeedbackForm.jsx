import React from 'react'
import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'


function FeedbackForm(handleAdd) {
    const [text, setText] =useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] =useState(true)
    const [message, setMessage] = useState('')
    

    const handleTextChange=(e)=>{
        if(text ===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!=='' && text.trim().length<=10){
            setMessage('text must at least 10 charachters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10 ){
            const newFeedback={
                text,
                rating
            }

            handleAdd(newFeedback)

            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>how would you rate your service with us?</h2>
            <RatingSelect select={(rating)=> setRating(rating)}/>
            <div className="input-group"> 
            <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder="write a review" 
                value={text}
            />
            <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
