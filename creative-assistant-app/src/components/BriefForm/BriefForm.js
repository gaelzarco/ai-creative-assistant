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

    let formData = new FormData()
    formData.append('user_text', formInput.text)

    const route = {
      dev: '/process',
      production: 'https://ai-creative-assistant-server.vercel.app/process'
    }

    const res = await fetch(route.production, {
      method: 'POST',
      body: formData
    })

    const data = await res.json()

    if (res.status === 200) {
      setBrief(data)
      setLoader(false)
    } else {
      console.log('Something went wrong...')
      setLoader(false)
    }
  }

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <label htmlFor="briefContext">Write a paragraph describing your company from a marketing standpoint</label>
        <textarea
          name="briefContext"
          id="briefContext"
          cols="30"
          rows="10"
          onChange={(e)=> setFormInput({ text: e.target.value }) }
          placeholder="At BlueShoes company, we are passionate about crafting high-quality footwear that not only looks great but also feels comfortable to wear. We specialize in designing shoes for a variety of occasions, from everyday wear to special events. Our team of skilled craftsmen uses only the finest materials to create footwear that is both durable and stylish."
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