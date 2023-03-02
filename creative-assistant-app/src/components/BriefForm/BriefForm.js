import React, { useEffect, useState } from 'react'
import BriefTemplate from '../brieftemplate/BriefTemplate'
import Button from '../button/Button'
import Loader from '../loader/loader'
import './briefForm.css'

const BriefForm = () => {

  const [ formInput, setFormInput ] = useState({
    text: ''
  })
  const [ brief, setBrief ] = useState(null)
  const [ loader, setLoader ] = useState(false)

  useEffect(() => {
    console.log(loader)
  }, [loader])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoader(true)

    console.log(loader)

    let formData = new FormData()
    formData.append('user_text', formInput.text)
    console.log(formData)

    const res = await fetch('/process', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()

    if (res.status === 200) {
      console.log(data)
      setBrief(data)
      setLoader(false)
      console.log(loader)
    } else {
      console.log('Something went wrong...')
      setLoader(false)
      console.log(loader)
    }
  }

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <label htmlFor="briefContext">Write a paragraph describing your campaign</label>
        <textarea
          name="briefContext"
          id="briefContext"
          cols="30"
          rows="10"
          onChange={(e)=> setFormInput({ text: e.target.value }) }
          placeholder="The name of our company is [company name] and it specializes in [product industry]."
        />
          <Button align={{alignSelf: 'center'}} type='submit'>
            Create Brief Template
          </Button> 
        <p style={{paddingTop: '15px'}}>Scroll down to view your brief!</p>
      </form>

      {loader === true && (
        <Loader />
      )}

      {loader === false && brief !== null ? (
        <BriefTemplate props={brief} />
      ) : null}
    </>
  )
}

export default BriefForm