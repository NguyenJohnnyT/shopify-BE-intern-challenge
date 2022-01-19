import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from './utils/inventoryAPI';
import Item from './Item';

const InventoryList = () => {
  const [list, setList ] = useState();

  useEffect(() => {
    const getList = async () => {
      let response = await getItems()
      setList(response);
    }

    return getList();
    
  }, [])

  function handleDelete (id) {
    deleteItem(id);
    document.location.reload()
  }
  return (
    <div>
      {list && list.map((item) => {
        return (
          <Item key={item.id} item={item} handleDelete={handleDelete}/>
        )
      })}
    </div>
  )
}

export default InventoryList