import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.svg';
import '../css/App.css'
// import religionsData from '../text_APIs/religionApI';
// import usersData from "http://localhost:5000/api/users"

export default function ShowApi({element}){
    const [religions, setReligions] = useState([]);
    useEffect(() => {
      //if api begins with http do fetch
      if (element.slice(0,4) === 'http') {
        console.log("show component loading")
        fetch(element)
        .then(response => response.json())
        .then(data => setReligions(data))
      }
      // else if its a local file setState
      else {

        // console.log(data);
        //if cache then fetch() from cache else setReligions
        setReligions(element);
      }
      }, [element]);
 
    return (
      <div >
        <h1>Drag, drop and hide:</h1>
        {/* 2 buttons to show the api: */}
        <ul>
          {religions.map(religion => (
            // show only the ones available () {}
            // religion.name || religion.description || religion.email ||
            (
            <li className='drag-drop-hide' key={religion.id}>
              <h2 className='text-inside'>{religion.name}</h2>
              <p className='text-inside'>{religion.description}</p>
              <p className='text-inside'>{religion.email}</p>
            </li>
          )))}
        </ul>
      </div>
    );
  }
