// import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import Card from "./components/Card/Card"

const App = () => {

  // const categories = [
  //   "Went Well",
  //   "To Improve",
  //   "Action Items"
  // ]

  const [cards, setCards] = useState([
    {
    id:0,
    category: "Went Well",
    content: "Hello world!",
    likes: 10,
    dislikes: 50
  }
  ])

  const addCard = (e) => {
    console.log(e.target.attributes.category.value)
    setCards(
      [...cards,    {
        category: e.target.attributes.category.value,
        content: "",
        likes: 0,
        dislikes: 0
      }]
    )
  }

  const removeCard = (e) => {
    let currentCards = [...cards]
    console.log(e.target.id)
    currentCards.splice(parseInt(e.target.id),1)
    setCards(
      currentCards
    )
  }

  return (
    <div className="App">
      <main class="content row">
        <h1>Retro Board</h1>
        {/* <!-- Layout changer --> */}
        <div>
          Layout &nbsp;<button class="button button-default">Column</button>
        </div>

        {/* <!-- The class "row" is for the layout changer --> */}
        <div class="RetroApp row">
          {/* <!-- Retro category --> */}
          <div class="RetroCategory RetroCategory-1">
            <h2>Went Well</h2>
            {/* <!-- Add a new card button --> */}
            <button
              type="button"
              class="ButtonAdd button button-default"
              aria-label="Add new card"
              title="Add new card"
              category={"Went Well"}
              onClick={addCard}
            >
              +
            </button>
            {
            cards
            .filter(card => card.category==="Went Well")
            .map(card => 
            <Card 
              key={"card-"+card.id} 
              content={card.content} 
              likes={card.likes}
              dislikes={card.dislikes}
              removeCard={removeCard} />)          
            }
          </div>

          {/* <!-- Retro category --> */}
          <div class="RetroCategory RetroCategory-2">
            <h2>To Improve</h2>
            <button
              type="button"
              class="ButtonAdd button button-default"
              aria-label="Add to new card"
              title="Add to new card"
              category={"To Improve"}
              onClick={addCard}
            >
              +
            </button>
            {
            cards
            .filter(card => card.category==="To Improve")
            .map(card => 
            <Card 
              key={"card-"+card.id} 
              {...card}
              removeCard={removeCard} />)          
            }
          </div>

          {/* <!-- Retro category --> */}
          <div class="RetroCategory RetroCategory-3">
            <h2>Action Items</h2>
            <button
              type="button"
              class="ButtonAdd button button-default"
              aria-label="Add to new card"
              title="Add to new card"
              category={"Action Items"}
              onClick={addCard}
            >
              +
            </button>
            {
            cards
            .filter(card => card.category==="Action Items")
            .map(card => 
            <Card 
              key={"card-"+card.id} 
              content={card.content} 
              likes={card.likes}
              dislikes={card.dislikes}
              removeCard={removeCard} />)          
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
