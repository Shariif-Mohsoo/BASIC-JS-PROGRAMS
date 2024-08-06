const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const pages = {
      "/users": [
        { id: 1, userName: "Bilbo" },
        { id: 2, userName: "Esmerelda" },
      ],
      "/about": "This is the about search",
    };
    const data = pages[url];
    if (data) {
      resolve({ status: 200, data });
    } else {
      reject({ status: 404, note: "): Check Url" });
    }
  });
};
fakeRequest("/users")
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
