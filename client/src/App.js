import React from 'react';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';

function App() {
  return (
    <div className="App">
      <h1>Shopify Backend Intern Challenge</h1>
      <h2>Inventory List</h2>
      <InventoryList />
      <InventoryForm />
    </div>
  );
}

export default App;
