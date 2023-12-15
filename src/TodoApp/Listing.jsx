import React, { useState } from 'react';
// import '../Todolist/style.css';
import { AiOutlineDelete } from 'react-icons/ai'

const Listing = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };

  return (
    <>
    <div className="listcard">  <span>
    <button
          className='delete'
          onClick={cutIt}
          style={{  color: 'white' ,   fontWeight: '500', fontSize:'20px'}}
        >
          <AiOutlineDelete />
        </button>
        <li style={{ textDecoration: line ? 'line-through' : 'none' }}>{props.text}</li>
      </span>
     </div>
    
    </>
  );
};

export default Listing;
