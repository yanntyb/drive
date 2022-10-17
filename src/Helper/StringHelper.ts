export const hideString = (text: string) => {
  return text
    .split("")
    .map((char) => {
      return "*";
    })
    .join("");
};
