export const getGroceries = async (userId) => {
const response = await fetch(`/api/groceries/user/${userId}`, {
    headers: {
        "Content-Type": "application/json",
      }
    });
    return await response.json();
    

}

export const getFreezerGroceries = async (userId) => {
  const response = await fetch(`/api/freezer-groceries/user/${userId}`, {
      headers: {
          "Content-Type": "application/json",
        }
      });
      return await response.json();
      
  
  }

  export const getPantryGroceries = async (userId) => {
    const response = await fetch(`/api/pantry-groceries/user/${userId}`, {
        headers: {
            "Content-Type": "application/json",
          }
        });
        return await response.json();
        
    
    }

export const deleteGrocery = async (id) => {
  const response = await fetch(`/api/groceries/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const editGrocery = async (grocery_id, item_name) => {
  const response = await fetch(`/api/groceries/edit/${grocery_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grocery_id,
      item_name,
    }),
  });
  return await response.json();
}


export const addGrocery = async (user_id, item_name, grocery_types_id, hours_multiplier) => {
  const response = await fetch(`/api/groceries/new/${user_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      item_name,
      grocery_types_id,
      hours_multiplier
    }),
  });
  return await response.json();
}

//freezer CRUD --------------------------------------------------------------------
export const deleteFreezerGrocery = async (id) => {
  const response = await fetch(`/api/freezer-groceries/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const editFreezerGrocery = async (grocery_id, item_name) => {
  const response = await fetch(`/api/freezer-groceries/edit/${grocery_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grocery_id,
      item_name,
    }),
  });
  return await response.json();
}


export const addFreezerGrocery = async (user_id, item_name, grocery_types_id) => {
  const response = await fetch(`/api/freezer-groceries/new/${user_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      item_name,
      grocery_types_id
    }),
  });
  return await response.json();
}

//pantry CRUD --------------------------------------------------------------------
export const deletePantryGrocery = async (id) => {
  const response = await fetch(`/api/pantry-groceries/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const editPantryGrocery = async (grocery_id, item_name) => {
  const response = await fetch(`/api/pantry-groceries/edit/${grocery_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grocery_id,
      item_name,
    }),
  });
  return await response.json();
}


export const addPantryGrocery = async (user_id, item_name, grocery_types_id) => {
  const response = await fetch(`/api/pantry-groceries/new/${user_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      item_name,
      grocery_types_id
    }),
  });
  return await response.json();
}