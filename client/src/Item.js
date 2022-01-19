import React from 'react'

const Item = ( {item, handleDelete} ) => {
  return (
    <>
      <div>
        ID: {item.id} | name: {item.name} | price: {item.price} | category: {item.category} | quantity: {item.quantity} 
        <button onClick={() => handleDelete(item.id)}>x</button>
      </div>
      
    </>
  )
}

export default Item