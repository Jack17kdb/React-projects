import React, { useRef, useState } from "react";
import "./style.css";

const App = () => {
  const [items, setItems] = useState(["apples", "oranges", "bananas"]);
  const [displayList, setDisplayList] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    if (inputValue.trim() === "") return;
    setItems((prevItems) => [...prevItems, inputValue.trim()]);
    setInputValue("");
  }

  function remItem() {
    setItems((prevItems) =>
      prevItems.filter((item) => item !== inputValue.trim()),
    );
    setInputValue("");
  }

  return (
    <div id="main-div">
      <h1>Todo List with Add and Remove</h1>
      <br />
      <input
        id="input"
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <br />
      <br />
      <div id="button-div">
        <button class="button" type="submit" onClick={addItem} value="add">
          add item
        </button>
        <button class="button" type="submit" onClick={remItem} value="remove">
          remove item
        </button>
      </div>
      <br />
      <br />
      <h3
        onClick={() => setDisplayList(!displayList)}
        style={{ cursor: "pointer" }}
      >
        {displayList ? "Click to hide items" : "Click to view items"}
      </h3>
      {displayList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
