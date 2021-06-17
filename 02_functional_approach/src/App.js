import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import Button from './element/Button'

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Damaris Schuster',
      title: 'Internal Response Supervisor',
      avatar: 'https://cdn.fakercloud.com/avatars/weglov_128.jpg'
    },
    {
      id: 2,
      name: 'Miss Alicia Ryan',
      title: 'Forward Implementation Developer',
      avatar: 'https://cdn.fakercloud.com/avatars/tomas_janousek_128.jpg'
    },
    {
      id: 3,
      name: 'Ada Erdman',
      title: 'Direct Metrics Supervisor',
      avatar: 'https://cdn.fakercloud.com/avatars/dansowter_128.jpg'
    },
    {
      id: 4,
      name: 'Jella Schröder',
      title: 'Chief Group Administrator',
      avatar: 'https://cdn.fakercloud.com/avatars/jqiuss_128.jpg'
    }
  ])
  const [showCard, setShowCard] = useState(true)

  const toggleShowCard = () => setShowCard(!showCard)

  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
  }

  const changeNameHandler = (event, id) => {
    //1. find the card
    const cardIndex = cards.findIndex(card => card.id === id)
    //2. make a shallow copy of the array of cards
    const cardsCopy = [...cards]
    //3. change name of the specific card
    cardsCopy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of cards
    setCards(cardsCopy)
  }

  const classes = ['button']

  if (cards.length < 3) classes.push('pink');
  if (cards.length < 2) classes.push('red text');


  const cardMarkup = showCard &&
    (
      cards.map((card, index) => <Card
        key={card.id}
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        onNameChange={(event) => changeNameHandler(event, card.id)} //el evento pasa como parametro
        onDelete={() => deleteCardHandler(index)}
      />
      )
    )



  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Button color="mango" length={cards.length}>Toogle</Button>
      <button className={classes.join(' ')} onClick={toggleShowCard}>Toggle show/hide</button>
      {cardMarkup}
    </div>
    </ThemeProvider>
  );
}

export default App;
