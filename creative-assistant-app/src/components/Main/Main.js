import React, {useState, useEffect} from 'react'
import './main.css'
import BriefForm from '../BriefForm/BriefForm'
import SecondaryTittle from '../SecondaryTittle/SecondaryTittle'

const Main = () => {
  const [companyName, setCompanyName] = useState('');
  const [productIndustry, setProductIndustry] = useState('');

 function captureVariables(event) {
    const textareaValue = event.target.value;
    const companyNameRegex = /The name of our company is (.+?) and it specializes in/;
    const productIndustryRegex = /and it specializes in (.+?)\./;
    const newCompanyName = textareaValue.match(companyNameRegex)?.[1] || '';
    const newProductIndustry = textareaValue.match(productIndustryRegex)?.[1] || '';
    setCompanyName(newCompanyName);
    setProductIndustry(newProductIndustry);
  }

const saveData = () =>{
  console.log(companyName)
  console.log(productIndustry)
}

  useEffect(()=>{
  }, [])

  return (
    <main className='main-container'>
        <div className="letsGetToTheAction-container">
        <SecondaryTittle text={'Lets get to the action!'}/>
        <BriefForm  saveData={saveData} captureVariables={captureVariables}/>
        </div>
    </main>
  )
}

export default Main