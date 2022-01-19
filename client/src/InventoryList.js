import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from './utils/inventoryAPI';
import Item from './Item';
import InventoryEditForm from './InventoryEditForm'

const InventoryList = () => {
  const [list, setList ] = useState();
  const [edit, setEdit ] = useState({ id: null, toggle: false });

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

  function handleEdit (item) {
    const newEdit = {toggle: true, item: item};
    setEdit(newEdit);
  }
  return (
    <>
      <div>
        {list && list.map((item) => {
          return (
            <Item 
              key={item.id} 
              item={item} 
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        })}
      </div>
      {edit.toggle ?
      <InventoryEditForm item={edit.item} />
      : null}
    </>
  )
}

export default InventoryList