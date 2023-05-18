export const removeWhiteSpace = (str: string) => {
  return str.replace(/\s/g, "-");
};

export const addWhiteSpace = (str: string) => {
  return str.replace(/-/g, " ");
};
