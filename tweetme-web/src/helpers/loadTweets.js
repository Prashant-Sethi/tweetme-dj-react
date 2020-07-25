export const loadTweets = (username) => {
  let url = "http://127.0.0.1:8000/api/tweets/list/";
  if (username) {
    url = `${url}${username}/`;
  }

  return fetch(url)
    .then((response) => (response.ok ? response.json() : []))
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });
};
