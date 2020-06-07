const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.post('http://localhost:3000/auth/login', {
      username: 'admin2',
      password: 'admin2',
    });
    
    console.log(data);

    const { token } = data;
    const { data: res2 } = await axios.get(
      'http://localhost:3000/users',

      {
        headers: { authorization: `Bearer ${token}` },
      },
    );
    console.log(res2);
  } catch (err) {

    console.log(err);
  }



})();
