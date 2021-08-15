import React, { useState } from "react";
import ToDOItem from "./ToDoItem";

function App() {
  const [state, setState] = useState("");
  const [item, Setitem] = useState([]);
  function changeText(event) {
    const newValue = event.target.value;
    setState(newValue);
  }
  function SetText() {
    Setitem((previtem) => {
      return [...previtem, state];
    });
    setState("");
  }
  function DeleteItem(id) {
    Setitem((previtem) => {
      return previtem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={state} onChange={changeText} />
        <button onClick={SetText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoitem, index) => (
            <ToDOItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={DeleteItem}
            />
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}
export default App;
