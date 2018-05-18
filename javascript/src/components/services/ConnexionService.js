export function getConnexion() {
     return fetch('/api/clock', {
        headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    }).then(res => {
      console.log("res => ", res);
      return res;
  })
  }