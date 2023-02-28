import React from 'react'
import Button from '../button/Button'
import './briefForm.css'

const BriefForm = ({captureVariables, saveData}) => {
  return (
    <form className='form-container' action="">
<<<<<<< HEAD
      <label htmlFor="briefContext">Write a parragraph describing your campaign</label>
      <textarea name="briefContext" id="briefContext" cols="30" rows="10" onChange={(e)=> captureVariables(e) } placeholder="The name of our company is [company name] and it specializes in [product industry]."></textarea>
=======
      <label htmlFor="briefContext">Write a paragraph describing your campaign</label>
      <textarea name="briefContext" id="briefContext" cols="30" rows="10" onChange={(e)=> captureVariables(e) }></textarea>
>>>>>>> ab48697ae84abdc80198991223ad6ef648eafbb1
      <Button saveData={saveData} text='Create Brief Template'/>
    </form>
  )
}

export default BriefForm