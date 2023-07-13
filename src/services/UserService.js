
export async function getAllUsers() {

    try{
        const response = await fetch('http://localhost:8998/api/users', {    
            method: 'GET',    
            withCredentials: true,    
            crossorigin: true,    
            mode: 'no-cors',       
          });
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    const response = await fetch(`http://localhost:8998/api/user`, {
        method: 'POST',
        crossorigin: true,    
        mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    // return await response.json();
}