import React from 'react'
import Button from '../button/Button'
import './briefForm.css'

const BriefForm = () => {
  return (
    <form className='form-container' action="">
      <label htmlFor="briefSections">Choose brief sections</label>
      <select name="briefSections" id="briefSections">
        <option value="null">Select brief sections</option>
        <option value="objective">Objective</option>
        <option value="targetAudience">Target Audience</option>
        <option value="background">Background</option>
        <option value="brandGuidelines">Brand Guidelines</option>
      </select>
      <label htmlFor="briefContext">Write a parragraph describing your campaign</label>
      <textarea name="briefContext" id="briefContext" cols="30" rows="10"></textarea>
      <Button text='Create Brief Template'/>
    </form>
  )
}

export default BriefForm