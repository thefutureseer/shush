import React, {useEffect, useState} from 'react';
{/* <DataFetcher endpoint='/text_APIs/religionApI.json'/> */}

 export default function DataFetcher({endpoint}) {
  const [data, setData] = useState([]);

  useEffect(
    () => {
     fetch(endpoint)
       .then(response => response.json())
       .then(dat=>{ console.log(dat); setData(dat)});
      
     }, [endpoint]
  );

  return (
    <div >
      <h1>Drag, drop and hide:</h1>
      <ul>
        {data.map(info => (
          <li className='drag-drop-hide' key={info.id}>
            <h2 className='text-inside'>{info.name}</h2>
            <p className='text-inside'>{info.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}