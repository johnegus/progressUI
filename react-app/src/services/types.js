export const getTypes = async () => {
    const response = await fetch(`/api/types/`, {
        headers: {
            "Content-Type": "application/json",
          }
        });
        return await response.json();
        
    
    }

export const getFreezerTypes = async () => {
    const response = await fetch(`/api/freezer-types/`, {
        headers: {
            "Content-Type": "application/json",
          }
        });
        return await response.json();
        
    
    }

export const getPantryTypes = async () => {
    const response = await fetch(`/api/pantry-types/`, {
        headers: {
            "Content-Type": "application/json",
          }
        });
        return await response.json();
        
    
    }