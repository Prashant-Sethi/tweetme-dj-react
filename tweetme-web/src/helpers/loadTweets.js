export const loadTweets = () => {
  return fetch("http://127.0.0.1:8000/api/tweets/")
    .then((response) => (response.ok ? response.json() : []))
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });
};
