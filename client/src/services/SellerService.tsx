export const signUpService = async (data: object) => {
    try {
      const fetchRes = await fetch('http://localhost:3000/api/v1/seller/product', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) 
      });
  
      const res = await fetchRes.json(); 
      if (!fetchRes.ok) {
        throw new Error(res.error || 'Something went wrong');
      }
  
      return res;
    } catch (e) {
      console.error(e);
      return e;
    }
  };