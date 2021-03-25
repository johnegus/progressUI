export const getTypes = async () => {
    const response = await fetch(`/api/types/`, {
        headers: {
            "Content-Type": "application/json",
          }
        });
        return await response.json();
        
    
    }

