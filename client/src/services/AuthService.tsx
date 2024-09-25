export const signUpService = async (data: object) => {
  try {
    const fetchRes = await fetch('http://127.0.0.1:3000/api/v1/signup', {
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
  } catch (e:any) {
    console.error("Error in signUpService:", e.message);
    return e;
  }
};

export const loginService = async (data: object) => {
  try {
    const fetchRes = await fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const res = await fetchRes.json();
    if (!fetchRes.ok) {
      throw new Error(res.error || 'Something went wrong');
    }

    return res

  } catch (e: any) {
    console.error(e.message);
    return e;
  }
}
