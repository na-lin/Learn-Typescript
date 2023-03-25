import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    const quantity = Number(quantityRef.current!.value);
    onAddItem(newProduct, quantity);
    inputRef.current!.value = "";
    quantityRef.current!.value = "1";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <input type="number" min={0} placeholder="quantity" ref={quantityRef} />
      <button>Add Item</button>
    </form>
  );
}
