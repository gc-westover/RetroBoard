// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Card from "./components/Card/Card";

const App = () => {
  const categories = ["Went Well", "To Improve", "Action Items"];

  const [cards, setCards] = useState([]);

  const addCard = (e) => {
    setCards([
      ...cards,
      {
        id: cards.length > 0 ? cards[cards.length - 1].id + 1 : 0,
        category: e.target.attributes.category.value,
        content: "",
        likes: 0,
        dislikes: 0,
      },
    ]);
  };

  const moveCard = (cardID, direction) => {
    let index = cards.findIndex((card) => card.id === cardID);
    let newCards = [...cards];
    let oldCategoryIndex = categories.indexOf(cards[index].category);
    let newCategory;
    if (direction === "right") {
      newCategory = categories[(oldCategoryIndex + 1) % 3];
    } else {
      newCategory = ((oldCategoryIndex-1)===-1) ? categories[2] : categories[oldCategoryIndex-1]
    }
    newCards[index] = { ...newCards[index], category: newCategory };
    setCards(newCards);
  };

  const removeCard = (cardID) => {
    setCards([...cards].filter((card) => card.id !== cardID));
  };

  const updateCard = (e, cardID, property) => {
    let index = cards.findIndex((card) => card.id === cardID);
    let newCards = [...cards];
    switch (property) {
      case "content":
        newCards[index] = { ...newCards[index], content: e.target.value };
        break
      case "likes":
        newCards[index] = { ...newCards[index], likes: cards[index].likes+1 };
        break
      case "dislikes":
        newCards[index] = { ...newCards[index], dislikes: cards[index].dislikes+1 };
        break
    }
    setCards(newCards);
  }
  
  const displayCards = (category) => {
    return cards
      .filter((card) => card.category === category)
      .map((card) => (
        <Card
          key={"card-"+card.id}
          {...card}
          removeCard={removeCard}
          moveCard={moveCard}
          update={updateCard}
        />
      ));
  };

  return (
    <div className="App">
      <main class="content">
        <h1>Retro Board</h1>
        {/* <!-- Layout changer --> */}
        <div>
          Layout &nbsp;<button class="button button-default">Column</button>
        </div>

        {/* <!-- The class "row" is for the layout changer --> */}
        <div class="RetroApp row">
          {/* <!-- Retro category --> */}
          <div class="RetroCategory RetroCategory-1" >
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
            {displayCards("Went Well")}
          </div>

          {/* <!-- Retro category --> */}
          <div class="RetroCategory RetroCategory-2" >
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
            {displayCards("To Improve")}
          </div>

          {/* <!-- Retro category --> */}
          <div class="RetroCategory RetroCategory-3" >
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
            {displayCards("Action Items")}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
