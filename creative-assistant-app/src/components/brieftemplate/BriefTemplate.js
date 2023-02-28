import React from 'react'
import './brieftemplate.css'
import SecondaryTittle from '../SecondaryTittle/SecondaryTittle'
import Button from '../button/Button'

const BriefTemplate = () => {
  return (
    <div className="yourBriefTemplate-container">
        <SecondaryTittle text='Your Brief Template'/>
          <div className="yourBriefTemplate-page">
            <form className='YourBriefTemplate-form' action="submit">
                <label htmlFor="background">Background:</label>
                <textarea name="background" id="background" cols="30" rows="10"></textarea>
                <label htmlFor="objective">Objective:</label>
                <textarea name="objectvie" id="objective" cols="30" rows="10"></textarea>
                <label htmlFor="target">Target:</label>
                <textarea name="target" id="target" cols="30" rows="10"></textarea>
                <label htmlFor="brandGuidelines">Brand Guidelines:</label>
                <textarea name="brandGuidelines" id="brandGuidelines" cols="30" rows="10"></textarea>
                <Button align={{alignSelf: 'center'}}>Download brief</Button>
            </form>
          </div>
    </div>
  )
}

export default BriefTemplate