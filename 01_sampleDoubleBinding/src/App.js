import React, { useState } from 'react';
import './App.css';
import Card from './Card';
function App() {
  const [name, setName] = useState('Alan Smith')
  const [showCard, setShowCard] = useState(true)
  
  const changeNameHandler = name => setName(name)

  const changeInputHandler = event => setName(event.target.value)

  const toggleShowCard = () => setShowCard(!showCard)
  
  const cardMarkup = showCard && 
  <Card
    avatar="https://cdn.fakercloud.com/avatars/axel_128.jpg"
    name={name}
    title="Direct Branding Developer"
    onChangeName={() => changeNameHandler('Mijar Din')}
    onChangeInput={changeInputHandler}
  >
  </Card>

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle show/hide</button>
      {cardMarkup}
    </div>
  );
}

export default App;
