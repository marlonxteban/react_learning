import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import Button from './element/Button'

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [
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
      ],
      showCard: true
    }
  }

  toggleShowCard = () => this.setState({ showCard: !this.state.showCard })

  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    this.setState({ cards: cards_copy })
  }

  changeNameHandler = (event, id) => {
    //1. find the card
    const cardIndex = this.state.cards.findIndex(card => card.id === id)
    //2. make a shallow copy of the array of cards
    const cardsCopy = [...this.state.cards]
    //3. change name of the specific card
    cardsCopy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of cards
    this.setState({ cards: cardsCopy })
  }

  render() {
    const classes = ['button']

    if (this.state.cards.length < 3) classes.push('pink');
    if (this.state.cards.length < 2) classes.push('red text');

    const cardMarkup = this.state.showCard &&
      (
        this.state.cards.map((card, index) => <Card
          key={card.id}
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          onNameChange={(event) => this.changeNameHandler(event, card.id)} //el evento pasa como parametro
          onDelete={() => this.deleteCardHandler(index)}
        />
        )
      )

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="mango" length={this.state.cards.length} onClick={this.toggleShowCard}>Toogle</Button>
          <button className={classes.join(' ')} onClick={this.toggleShowCard}>Toggle show/hide</button>
          {cardMarkup}
        </div>
      </ThemeProvider>
    );
  }


}

export default App;
