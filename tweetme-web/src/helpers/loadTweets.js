export const loadTweets = (setTweets) => {
  fetch("http://127.0.0.1:8000/api/tweets/")
    .then((response) => response.json())
    .then((data) => {
      setTweets(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
