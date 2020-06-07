const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.post('http://localhost:3000/auth/login', {
      username: 'Phil23lip',
      password: '1234567',
      seller: true,
    });
    console.log(data);

    const { token } = data;
    const { data: res2 } = await axios.get(
      'http://localhost:3000/items',

      {
        headers: { authorization: `Bearer ${token}` },
      },
    );

    console.log(res2);
  } catch (err) {
    console.log(err);
  }
})();
