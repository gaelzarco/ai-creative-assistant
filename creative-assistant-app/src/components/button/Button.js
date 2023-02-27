import React from 'react'
import './button.css'

const Button = ({text, saveData}) => {
  return (
   <button onClick={(e)=>{
    e.preventDefault()
    saveData()
   }} type='sumbit'>{text}</button>
  )
}

export default Button