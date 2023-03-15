import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.svg';
import '../css/App.css'
import religionsData from '../text_APIs/religionApI';

export default function Dash(){
    const [religions, setReligions] = useState([]);
  
    useEffect(() => {
      //if cache then fetch() from cache else setReligions
      setReligions(religionsData);
    }, []);
 
    return (
      <div >
        <h1>Drag, drop and hide:</h1>
        <ul>
          {religions.map(religion => (
            <li className='drag-drop-hide' key={religion.id}>
              <h2 className='text-inside'>{religion.name}</h2>
              <p className='text-inside'>{religion.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

// export default function Dash(){

//   return(
//    <div className='App'>
//     <div className="App App-div">
//     <img src={logo} className="App-logo" alt="logo" />
//     <div className='catagory-container'>
//     <h1 className='pop-up move-hide'>FIRST RELIGION ON EARTH?</h1>
//     <div className='pop-up'>I need to clarify that the concept of "first religions on earth" is a subject of ongoing research and debate among scholars, as the development of religion and spirituality is shrouded in prehistory and archaeological evidence is limited. However, based on available information, here is a list of some of the earliest known religious traditions:</div>
//     <div className='fancy'> 1.  It is difficult to say what spiritual practices existed before animism, as the development of religion and spirituality is shrouded in prehistory and archaeological evidence is limited. However, some scholars suggest that the earliest human spiritual practices may have involved the worship of ancestors or the veneration of powerful natural forces, such as the sun, moon, and stars. Others propose that shamanic practices, which involve communicating with spirits and other non-physical entities, may have been one of the earliest forms of human spirituality. Ultimately, the specific nature and origins of prehistoric spiritual practices remain a subject of ongoing research and debat
//     </div>
//       Edit <code>src/App.js</code> and save to reload.
//     </div>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <button>Learn about </button>
//     </a>
//     </div>
//    </div>
// )}