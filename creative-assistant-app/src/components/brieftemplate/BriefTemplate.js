import React, { useState, useEffect } from 'react'
import './brieftemplate.css'
import SecondaryTittle from '../SecondaryTittle/SecondaryTittle'
import Button from '../button/Button'

const BriefTemplate = ({ props }) => {
  let { background, objective, target_audience, brand_guidelines } = props

  const [ input, setInput ] = useState({
    backgroundInput: '',
    objectiveInput: '',
    targetAudienceInput: '',
    brandGuidelinesInput:''
  })

  useEffect(() => {
    setInput({
      backgroundInput: background,
      objectiveInput: objective,
      targetAudienceInput: target_audience,
      brandGuidelinesInput: brand_guidelines
    })
  }, [background, objective, target_audience, brand_guidelines])

  return (
    <div id='section3' className="yourBriefTemplate-container">
        <SecondaryTittle text='Your Brief Template'/>
          <div className="yourBriefTemplate-page">
            <form className='YourBriefTemplate-form' action="submit">
                <label htmlFor="background">Background:</label>
                <textarea name="background" id="background" cols="30" rows="10"
                value={input.backgroundInput}
                onChange={(e) => setInput({ ...input, backgroundInput: e.target.value})}
                ></textarea>

                <label htmlFor="objective">Objective:</label>
                <textarea name="objectvie" id="objective" cols="30" rows="10"
                value={input.objectiveInput}
                onChange={(e) => setInput({ ...input, objectiveInput: e.target.value})}
                ></textarea>

                <label htmlFor="target">Target:</label>
                <textarea name="target" id="target" cols="30" rows="10"
                value={input.targetAudienceInput}
                onChange={(e) => setInput({ ...input, targetAudienceInput: e.target.value})}
                ></textarea>

                <label htmlFor="brandGuidelines">Brand Guidelines:</label>
                <textarea name="brandGuidelines" id="brandGuidelines" cols="30" rows="10"
                value={input.brandGuidelinesInput}
                onChange={(e) => setInput({ ...input, brandGuidelinesInput: e.target.value})}
                ></textarea>
                <Button align={{alignSelf: 'center'}}>Download brief</Button>
            </form>
          </div>
    </div>
  )
}

export default BriefTemplate