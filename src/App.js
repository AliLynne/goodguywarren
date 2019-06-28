import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import img1 from './assets/images/1.jpg'
import img2 from './assets/images/2.jpg'

const max = 2;

function App() {

  const [num, setNum] = useState(0)

  const randomNum = () => {
    return Math.floor((Math.random() * max) + 1)
  }

  const handleClick = () => {
    const random = randomNum()
    setNum(random)
  }

  const img = "img" + num

  return (
    <div id="polaroid" className="App">
    <figure> 
      <img src={img} height="300" width="300" alt="Elizabeth Warren" /> 
      <figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni iusto alias dolore hic similique saepe rem, facilis, nobis laudantium neque sint, facere perferendis!</figcaption> 
    </figure>
      <button onClick={() => handleClick()}>Try Again</button>
      <Form />
    </div>
  );
}

export default App;


