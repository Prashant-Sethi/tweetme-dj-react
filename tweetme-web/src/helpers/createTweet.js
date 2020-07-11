import { getCookie } from "./getCookie";

export const createTweet = (newTweet) => {
  const csrftoken = getCookie("csrftoken");
  return fetch("http://127.0.0.1:8000/api/tweets/create/", {
    method: "post",
    body: JSON.stringify(newTweet),
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRFToken": csrftoken,
    },
  })
    .then((response) => (response.ok ? response.json() : {}))
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });
};
