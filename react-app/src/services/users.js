
export const editAvatar = async (id, avatar) => {
    const response = await fetch(`/api/users/edit-avatar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
      }),
    });
    return await response.json();
  }


  export const deleteUser = async (id) => {
    const response = await fetch(`/api/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }