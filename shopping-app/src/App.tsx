import React, { useState } from "react";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import "./App.css";

// models
import Item from "./models/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string) => {
    console.log(product);
  };
  // const items = [
  //   { id: 1, product: "lemon", quantity: 3 },
  //   { id: 2, product: "apply", quantity: 10 },
  // ];
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
