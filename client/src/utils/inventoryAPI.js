export const getItems = async () => {
  let data = await fetch('http://localhost:3001/api/inventory',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
  let response =  await data.json()
  return response;
}

export const deleteItem = async (id) => {
  return fetch(`http://localhost:3001/api/inventory/${id}`, {
    method: 'DELETE',
    headers : { 
      'Content-Type': 'application/json',
    }
  })
}

export const addItem = async (name, price, category, quantity) => {
  return fetch(`http://localhost:3001/api/inventory/`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      price,
      category,
      quantity
    })
  })
}

export const editItem = async(id, name, price, category, quantity) => {
  return fetch(`http://localhost:3001/api/inventory/${id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name,
      price,
      category,
      quantity
    })
  })
}