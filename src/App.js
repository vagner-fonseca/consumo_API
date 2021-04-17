import React, { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [image, setImage] = useState('');
  
  
  const handleChange =() => {
    axios
    .get('https://api.generated.photos/api/v1/faces?api_key=9uC7JwoBp-69TxfjlSauqg&order_by=random')
    .then(res =>{
     
    const uri = res.data.faces[0].urls[4][512];
    uri && setImage(uri);
    })
    .catch(err => {
      console.log(err.message);
    })

  };


  return (
    <div className="App">
      <h1>Gerador de faces</h1>
      {image && <img src={image} alt='AI Face'/>}
      <button type='button' onClick={handleChange}>
        Proximo Rosto
      </button>
    </div>
  );
}

export default App;
