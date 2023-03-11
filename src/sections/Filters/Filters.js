import {  useState, useEffect } from 'react'
import './Filters.css';


const Filters = ({filter, setFilter}) => {
    const [inputText,setInputText] = useState('')
   
        
    useEffect(() => {
      setFilter(inputText + '')
  }, [inputText])

    const submitBtn = (e) => {
        setInputText(e.target.value);
        setFilter(inputText)
        e.preventDefault()  
   }

    return (
      <div className='div-filter'>
            <input className = 'title-filter' id="searchInput" type="text" placeholder='Search Products' onChange={submitBtn} />
      </div>
    )
}

export default Filters