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

  async function handleSubmit(e) {
    e.preventDefault()

    let formData = new FormData()
    formData.append('background', input.backgroundInput)
    formData.append('objective', input.objectiveInput)
    formData.append('target_audience', input.targetAudienceInput)
    formData.append('brand_guidelines', input.brandGuidelinesInput)
    console.log(formData)

    const res = await fetch('https://ai-creative-assistant-server.vercel.app/download', {
      method: 'POST',
      body: formData
    })

    try {
      // Will research to explain to the best of my abilities
      // https://stackoverflow.com/questions/63942715/how-to-download-a-readablestream-on-the-browser-that-has-been-returned-from-fetc
      const blob = await res.blob()
      const newBlob = new Blob([blob])

      const blobUrl = window.URL.createObjectURL(newBlob)

      const link = document.createElement('a')
      link.href = blobUrl
      link.setAttribute('download', `brief.docx`)
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)

      window.URL.revokeObjectURL(blobUrl)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div id='section3' className="yourBriefTemplate-container">
        <SecondaryTittle text='Your Brief Template'/>
          <div className="yourBriefTemplate-page">
            <form className='YourBriefTemplate-form' onSubmit={handleSubmit}>
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
                <Button align={{alignSelf: 'center'}} type='submit'>Download brief</Button>
            </form>
          </div>
    </div>
  )
}

export default BriefTemplate