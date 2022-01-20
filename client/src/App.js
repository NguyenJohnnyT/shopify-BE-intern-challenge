import React, {useState, useEffect} from 'react';
import InventoryList from './components/InventoryList';
import InventoryForm from './components/InventoryForm';
import { getItems } from './utils/inventoryAPI';

function App() {
  return (
    <div className="App">
      <h1>Shopify Backend Intern Challenge</h1>
      <h2>Inventory List</h2>
      <InventoryList />
      <h2>Add an item</h2>
      <InventoryForm />
    </div>
  );
}

export default App;
