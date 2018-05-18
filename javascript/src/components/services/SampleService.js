

export function getSample() {
  return fetch('/api/sample', {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    }
  }).then(r => r.json())
}
