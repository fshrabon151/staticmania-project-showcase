const classNames = (...classes: Array<string | false>) => {
  return classes.filter(Boolean).join(" ");
};

export default classNames;
