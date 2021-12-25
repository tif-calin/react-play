
const hasSameValues = (a: {[key: string]: any}, b: {[key: string]: any}, except: string[] = []) => {
  // does object a have all the values of object b?
  if (except.length) return Object.keys(a).filter(key => !except.includes(key)).every(key => a[key] === b[key]);
  else return Object.keys(a).every(key => a[key] === b[key]);
};

export { hasSameValues };
