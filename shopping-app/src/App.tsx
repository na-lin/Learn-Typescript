import React from "react";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import "./App.css";

function App() {
  const items = [
    { id: 1, product: "lemon", quantity: 3 },
    { id: 2, product: "apply", quantity: 10 },
  ];
  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
