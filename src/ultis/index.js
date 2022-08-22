const debounce = (callback, time = 500) => {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, time);
  };
};

const getFirstLine = (content, end = 100) => {
  return content.split('\n')[0].trim().substring(0, end);
};

export { debounce, getFirstLine };
