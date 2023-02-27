import React from 'react'
import Button from '../button/Button'
import './briefForm.css'

const BriefForm = ({formData, setFormData, handleParragraphChange, handleSelectChange, saveData}) => {
  return (
    <form className='form-container' action="">
      <label htmlFor="briefSection">Choose brief sections</label>
      <select multiple name='section' id="briefSection" onChange={(event)=> handleSelectChange(event) }>
        <option data-name='section1' value="objective">Objective</option>
        <option data-name='section2' value="targetAudience">Target Audience</option>
        <option data-name='section3' value="background">Background</option>
        <option data-name='section4' value="brandGuidelines">Brand Guidelines</option>
      </select>
      <label htmlFor="briefContext">Write a parragraph describing your campaign</label>
      <textarea name="briefContext" id="briefContext" cols="30" rows="10" onChange={(evt)=> handleParragraphChange(evt, setFormData, formData) }></textarea>
      <Button saveData={saveData} text='Create Brief Template'/>
    </form>
  )
}

export default BriefForm