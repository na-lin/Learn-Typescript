import React from "react";
import Item from "../models/item";
interface ShoppingListProps {
  items: Item[];
  children?: React.ReactNode;
}

export default function ShoppingList({
  items,
  children,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Shopping List</h1>
      {children}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
