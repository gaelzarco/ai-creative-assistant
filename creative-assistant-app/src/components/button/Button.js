import React from 'react'
import './button.css'

const Button = (props) => {
  return (
   <button style={props.align} onClick={props.onClick} type='sumbit'>{props.children}</button>
  )
}

export default Button