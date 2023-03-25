import React, { useState } from "react";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import "./App.css";
import { v4 as getId } from "uuid";

// models
import Item from "./models/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), product, quantity }]);
  };

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
