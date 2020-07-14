export const apiTweetDetail = (tweetId) => {
  const url = `http://127.0.0.1:8000/api/tweets/${tweetId}/`;

  return fetch(url)
    .then((response) => (response.ok ? response.json() : []))
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });
};
