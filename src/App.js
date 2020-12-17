import React, {useState, useEffect} from 'react';
import './App.css';
const axios = require('axios');



function App () {
 
  const [sentence, setSentence] = useState('');
  const [counter, setCounter] = useState(1);

  useEffect(()=>{
    axios.get(`https://api.hatchways.io/assessment/sentences/${counter}`)
    .then(res=> {
      setSentence(res.data.data.sentence);

    })
    .catch(err=>console.log(err));
  }, [counter])
  
  
    return (
      <div>
        <div id='scrambled-word'>{sentence}</div>
      </div>
    );
  }

export default App;
