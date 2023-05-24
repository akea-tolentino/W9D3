const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    'X-CSRF-Token': csrfToken,
    Accept: "application/json",
    ...options.headers
  };

//   const getUsersAsync = async () => {
//     const response = await fetch(`http:....`);
//     if (!response.ok) {
//         throw new Error("Oops!");
//     }
//     const data = await response.json();
//     return data;
// }

  // return await fetch(url, options);
  const response = await fetch(url, options);
    if (!response.ok) {
      throw response;
    }
    return response.json();
}

 export const followUser = function (id) {
  return customFetch(`/users/${id}/follow`, {
    method: 'POST'
  });
}

export const unfollowUser = function (id) {
  return customFetch(`/users/${id}/follow`, {
    method: 'DELETE'
  });
}

// export const foo = "bar";
