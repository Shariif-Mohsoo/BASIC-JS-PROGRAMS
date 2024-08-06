//this is a fake http request function which take 1s to resolve or reject the promise
//here we will see the chaining of the the promises
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/user": [
          { id: 1, userName: "Bilbo" },
          { id: 2, userName: "Esmerelda" },
        ],
        "/user/1": {
          id: 1,
          userName: "Bilbo",
          upVotes: 360,
          city: "Lisbon",
          topPosId: 454,
        },
        "/user/2": {
          id: 2,
          userName: "Esmerelda",
          upVotes: 571,
          city: "Honolulu",
        },
        "/post/454": {
          id: 454,
          title: "Ladies & Gentlemen, may I introduce you my pet pig, Hamlet",
        },
        "/about": " This is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404, Note: "): OOP'S Wrong Url" });
      }
    }, 1000);
  });
};

fakeRequest("/user")
  .then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/user/${id}`);
  })
  .then((res) => {
    console.log(res);
    const post = res.data.topPosId;
    return fakeRequest(`/post/${post}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
