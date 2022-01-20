import React, { useState } from 'react';
import { addItem } from '../utils/inventoryAPI';

export default function InventoryForm() {
  const [input, setInput] = useState({
    name: '',
    price: '',
    category: '',
    quantity: ''
  })
  function handleFormSubmit () {
    addItem(
      input.name,
      input.price,
      input.category,
      input.quantity
    )
    document.location.reload();
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name:</label>
      <input 
        type='text'
        value={input.name}
        onChange={e=>setInput({...input, name: e.target.value})}
      ></input>
      <label>Price:</label>
      <input
        type='text'
        value={input.price}
        onChange={e=>setInput({...input, price: e.target.value})}
      ></input>
      <label>Category:</label>
      <input 
        type='text'
        value={input.category}
        onChange={e=>setInput({...input, category: e.target.value})}
      ></input>
      <label>Quantity:</label>
      <input 
        type='text'
        value={input.quantity}
        onChange={e=>setInput({...input, quantity: e.target.value})}
      ></input>
      <button type='submit'>Add new item</button>
    </form>
  );
}
