import React, {useEffect, useState} from 'react';

 export default function DataFetcher({endpoint}) {
  const [data, setData] = useState([]);

  useEffect(
    () => {
     fetch(endpoint)
       .then(response => response.json())
       .then(dat=>{ setData(dat)});
      
     }, [endpoint]
  );

  return (
    <div >
      <h1>Drag, drop and hide:</h1>
      <ul>
        {data.map(info => (
          <li className='drag-drop-hide' key={info.id}>
            <h2 className='text-inside'>{info.name}</h2>
            {/* <p className='text-inside'>{info.description}</p>
            <p className='text-inside'>{info.email}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );

}