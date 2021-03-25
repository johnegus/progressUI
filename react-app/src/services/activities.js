export const getactivities = async (userId) => {
const response = await fetch(`/api/activities/user/${userId}`, {
    headers: {
        "Content-Type": "application/json",
      }
    });
    return await response.json();
    

}

export const deleteActivity = async (id) => {
  const response = await fetch(`/api/activities/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const deleteAll = async (user) => {
  const response = await fetch(`/api/activities/user/${user}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const editActivity = async (activity_id, item_name) => {
  const response = await fetch(`/api/activities/edit/${activity_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      activity_id,
      item_name,
    }),
  });
  return await response.json();
}


export const addActivity = async (user_id, item_name, activity_types_id, hours_multiplier) => {
  const response = await fetch(`/api/activities/new/${user_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      item_name,
      activity_types_id,
      hours_multiplier
    }),
  });
  return await response.json();
}

