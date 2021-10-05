import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  var head = "FOOD INTERPRETER";

  const foodDictionary = {
    "🍇": "Grapes",
    "🍉": "Watermelon",
    "🍎": "Red Apple",
    "🥑": "Avocado",
    "🥒": "Cucumber",
    "🍕": "Pizza",
    "🥚": "Egg",
    "🥪": "Sandwich",
    "🧈": "Butter",
    "🎂": "Birthday Cake",
    "🍿": "Popcorn"
  };

  var foodItems = Object.keys(foodDictionary);
  function inputChangeHandler(event) {
    var food = event.target.value;
    var meaning = foodDictionary[food];
    if (meaning === undefined) {
      meaning = "Not present in our database.Will update soon";
    }
    setMeaning(meaning);
  }

  function foodItemClickHandler(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{head}</h1>
      <input onChange={inputChangeHandler}></input>
      <div style={{ fontSize: "2rem", padding: "1rem 0.5rem" }}>{meaning}</div>
      <h3>Example Food items</h3>
      {foodItems.map(function (food) {
        return (
          <span
            onClick={() => foodItemClickHandler(food)}
            key={food}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {food}
          </span>
        );
      })}
    </div>
  );
}
