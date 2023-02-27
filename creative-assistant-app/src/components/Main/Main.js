import React, {useState, useEffect} from 'react'
import './main.css'
import BriefForm from '../BriefForm/BriefForm'
import SecondaryTittle from '../SecondaryTittle/SecondaryTittle'

const Main = () => {
  const [parragraphData, setParragraphData] = useState('')
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({})

  function handleSelectChange(event) {
    const selected = event.target.selectedOptions;
    const options = [];
    for (let i = 0; i < selected.length; i++) {
      const key = selected[i].getAttribute('data-name');
      const value = selected[i].value;
      options.push({ [key]: value });
    }
    setSelectedOptions(options);
  }

function handleParragraphChange(evt) {
  const value = evt.target.value;
  setParragraphData(value)
}

const saveData = () =>{
  setFormData({
    briefContext: parragraphData,
    selectedOptions: selectedOptions
  })

}

  useEffect(()=>{
  }, [formData])

console.log(formData)
  return (
    <main className='main-container'>
        <div className="letsGetToTheAction-container">
        <SecondaryTittle text={'Lets get to the action!'}/>
        <BriefForm fromData={formData} setFormData={setFormData} handleParragraphChange={handleParragraphChange} handleSelectChange={handleSelectChange} saveData={saveData}/>
        </div>
    </main>
  )
}

export default Main