const API = 'http://private-36f1e-contactstest.apiary-mock.com'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function get (route) {
  return fetch(`${API}/${route}`, {
    method: 'GET',
    headers
  })
}

export function post (route, data) {
  return fetch(`${API}/${route}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
}

export function put (route, data) {
  return fetch(`${API}/${route}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  })
}

export function remove (route, data) {
  return fetch(`${API}/${route}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(data)
  })
}
