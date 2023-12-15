import React from 'react'
import { useState } from 'react'
import {FaPlus} from 'react-icons/fa'
import Listing from './Listing'
 
const Todo = () => {
    const [data, setData] = useState('');
    const [allData, setAllData] = useState([]);
  
    const handleInputChange = (event) => {
      setData(event.target.value);
    };
  
    const handleClick = () => {
      if (data.trim() === '') {
        alert('Please fill in the input field before adding an item.');
        return;
      }
  
      setAllData((prevData) => [...prevData, data]);
      setData('');
    };
  return (
   <>
    <div className='main_div'>
<div className='center_div'>
  <br />
  <h1>ToDo List</h1>
  <br />
  <input
    type='text'
    placeholder='Add Todo Work'
    value={data}
    onChange={handleInputChange}
  />
  <button onClick={handleClick}><FaPlus/></button>
  <ol>
    {allData.map((val, index) => (
      <Listing key={index} text={val} />
    ))}
  </ol>
</div>
</div> 
   </>
  )
}

export default Todo

