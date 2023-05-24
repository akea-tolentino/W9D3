const csrfToken = document.querySelector("meta[name=csrf-token]").content;
export const foo = "bar";

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers
  };

  return await fetch(url, options);
}
