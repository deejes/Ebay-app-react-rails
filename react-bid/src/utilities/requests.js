const DOMAIN = 'http://localhost:3000';
const auth = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjEsImZpcnN0TmFtZSI6IkNsYXJrIiwibGFzdE5hbWUiOiJMZWdyb3MiLCJleHAiOjE1MDM0NDYzNjN9.cM6v8xSYfmoEplofjfrSdvtUHP4O5ZDgwnvd8tVAlaY'
function getJwt () {
  return window.localStorage.getItem('jwt');
}

// To keep all methods that do requests to Questions together, we'll put
// them inside an object named `Question`.
const Auction = {
  // getAll: function () { ... }
  // 👇 Property Method Shorthand. Syntax sugar for 👆
  getAll() {
    return fetch(
      `${DOMAIN}/auctions`,
      {
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}/auctions/${id}`,
      {
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },
  post (attributes) {
    return fetch(
      `${DOMAIN}/auctions/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  },
  bidPost (attributes,id){
        return fetch(
      `${DOMAIN}/auctions/${id}/bids`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${getJwt()}`
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
};

const Token = {
  post (params) {
    return fetch(
      `${DOMAIN}/tokens/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json());
  }
}

export { Auction, Token };
