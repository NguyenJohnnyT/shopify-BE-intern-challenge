import React from 'react'

const Item = ( {item, handleDelete, handleEdit} ) => {
  return (
    <>
      <div>
        ID: {item.id} | name: {item.name} | price: {item.price} | category: {item.category} | quantity: {item.quantity}
        <button 
          style={{"marginLeft": "10px"}}
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
        <button 
          style={{"marginLeft": "35px"}}
          onClick={() => handleEdit(item)}
        >
          Edit item
        </button>
      </div>
    </>
  )
}

export default Item