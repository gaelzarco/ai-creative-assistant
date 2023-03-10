import React, {useState, useEffect} from 'react'
import './main.css'
import BriefForm from '../BriefForm/BriefForm'
import SecondaryTittle from '../SecondaryTittle/SecondaryTittle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import { faArchive} from '@fortawesome/free-solid-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { faHandPaper} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import graphicElement from '../../assets/graphicelement.png'

const Main = () => {
  const [companyName, setCompanyName] = useState('');
  const [productIndustry, setProductIndustry] = useState('');
  const [loadedBriefOutput, setLoadedBriefOutput] = useState(false)

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
  setLoadedBriefOutput(true)
  console.log(loadedBriefOutput)
}

  useEffect(()=>{
  }, [])

  return (
    <main className='main-container'>
        <div className="howItWorks-container">
          <SecondaryTittle text='How it works'/>
          <div className="instructions-container">
            <div className="instruction-card">
                <FontAwesomeIcon icon={faHandPaper} style={{color: '#ac5eec'}} />
                <h3>Provide information</h3>
                <p>Provide a summary of your brief, keeping in mind that the more contextual information you provide, the better the output will be.</p>
            </div>
            <div className="instruction-card">
                <FontAwesomeIcon icon={faEdit} style={{color: '#ac5eec'}} />
                <h3>Edit to your preference</h3>
                <p>Correct any mistakes or unclear sections that you'd like to correct or rephrase.</p>
            </div>
            <div className="instruction-card">
              <FontAwesomeIcon icon={faDownload} style={{color: '#ac5eec'}} />
                <h3>Save and download</h3>
                <p>Save the template in a Mircrosoft Word extension</p>
            </div>
          </div>
        </div>
        <div id='section2' className="letsGetToTheAction-container">
          <div className="left-content">
            <SecondaryTittle text='Lets get to the action!'/>
            <BriefForm  saveData={saveData} captureVariables={captureVariables}/>
          </div>
          <div className="right-content">
            <img src={graphicElement} alt="Brief document" />
          </div>
        </div>
    </main>
  )
}

export default Main