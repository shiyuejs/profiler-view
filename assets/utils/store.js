export const getLocalStorage = key => {
  if (process.browser) {
    if (localStorage.getItem(key)) {
      console.log("is_getLocalStorage", JSON.parse(localStorage.getItem(key)));
      return JSON.parse(localStorage.getItem(key));
    }
    return "";
  }
};

export const setLocalStorage = (key, value = "") => {
  let formatted = "";
  if (process.browser) {
    try {
      formatted = JSON.stringify(value);
    } catch (error) {
      console.error(`invalid input! JSON.stringify error key:${key}`);
    }
    localStorage.setItem(key, formatted);
  }
};
