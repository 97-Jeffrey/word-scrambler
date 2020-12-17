import React, {useState, useEffect} from 'react';
import './App.css';
const axios = require('axios');



function App () {
 
  const [sentence, setSentence] = useState('');

  useEffect(()=>{
    axios.get('https://api.hatchways.io/assessment/sentences/1')
    .then(res=> {
      setSentence(res.data.data.sentence);

    })
    .catch(err=>console.log(err));
  }, [])
  
  
    return (
      <div>
        <div className='sentence'>{sentence}</div>
      </div>
    );
  }

export default App;
