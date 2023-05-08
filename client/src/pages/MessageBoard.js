import React from 'react';
import '../css/App.css'
// import DataFetcher from '../components/DataFetcher';{/* <DataFetcher endpoint='/text_APIs/religionApI.json'/> */}
import ShowApi from '../services/ShowApi'; 


export default function MessageBoard(){
 return (<> 
    <h1>Message Board</h1>
    <ShowApi element={"http://localhost:5000/api/users"} />
  </>)
}

// const [messages, setMessage] = useState([]);

// useEffect(() => {
//   //if cache then fetch() from cache else messages
//   //fetch messages from browser api
//  fetch("http://localhost:5000/api/users")
//     .then(response => response.json())
//     .then(data => setMessage(data))
//   // console.log(data);
// }, []);

// return (
//   <div >
//     <h1>Drag, drop and hide:</h1>
//     <ul>
//       {messages.map(message => (
//         <li className='drag-drop-hide' key={message.id}>
//           <h2 className='text-inside'>{message.name}</h2>
//           <p className='text-inside'>{message.email}</p>
//         </li>
//       ))}
//     </ul>
//   </div>
// );