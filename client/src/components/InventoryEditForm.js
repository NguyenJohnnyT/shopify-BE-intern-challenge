import React, {useState, useEffect} from 'react';
import { editItem } from '../utils/inventoryAPI';

export default function InventoryEditForm({item}) {
  const [input, setInput] = useState({
    id: item.id,
    name: item.name,
    price: item.price,
    category: item.category,
    quantity: item.quantity
  })

  useEffect(()=> {
    setInput(item);
  }, [item])

  function handleFormSubmit () {
    editItem(
      input.id,
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
      <button type='submit'>Edit item</button>
    </form>
  );
}
