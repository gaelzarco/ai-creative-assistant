import React from 'react'
import './main.css'
import BriefForm from '../BriefForm/BriefForm'
import SecondaryTittle from '../SecondaryTittle/SecondaryTittle'


const Main = () => {
  return (
    <main className='main-container'>
        <div className="letsGetToTheAction-container">
        <SecondaryTittle text={'Lets get to the action!'}/>
        <BriefForm/>
        </div>
    </main>
  )
}

export default Main