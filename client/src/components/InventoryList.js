import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../utils/inventoryAPI';
import Item from './Item';
import InventoryEditForm from './InventoryEditForm';
import { CSVLink } from 'react-csv';

const InventoryList = () => {
  const [list, setList ] = useState();
  const [edit, setEdit ] = useState({ item: {id: null}, toggle: false });

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
    if (edit.item.id === item.id && item.id !== null) {
      setEdit({ item: {id: null}, toggle: false})
      return
    }
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
      {edit.toggle ? (
        <div>
          <h2> Editing item...</h2>
          <InventoryEditForm item={edit.item} />
        </div>
      )
      : null}
      <h2>Download as csv</h2>
      {list 
      ? <CSVLink data={list}>Download me</CSVLink>
      : null
      }
    </>
  )
}

export default InventoryList