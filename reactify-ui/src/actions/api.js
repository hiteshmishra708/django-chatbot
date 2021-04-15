import { urls } from "./constants";
export const Api = (url, body, type) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": undefined
  }

  let data = fetch(urls.SERVER_URL + url, {
    method: type,
    headers,
    body: JSON.stringify(body)
  })
    .then((response) => {
      return response.json()
    })
    .then(response => {
      return response
    })
    .catch(error => {
      throw new Error('Something went wrong');
    });
  return data;
}
