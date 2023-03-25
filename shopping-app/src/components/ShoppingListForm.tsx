import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}

export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = inputRef.current?.value;
    newProduct && onAddItem(newProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <button>Add Item</button>
    </form>
  );
}
