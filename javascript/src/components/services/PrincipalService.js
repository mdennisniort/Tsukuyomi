export function getPrincipal() {
    return fetch('/Principal', {
      headers: {
       
      }
    }).then(res => {
      console.log("res => ", res);
      return res;
  })
  }