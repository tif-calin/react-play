
const hasSameValues = (a: {[key: string]: any}, b: {[key: string]: any}) => {
  // does object a have all the values of object b?
  for (let key in b) {
    if (a[key] !== b[key]) return false;
  }

  return true;
};

export { hasSameValues };
