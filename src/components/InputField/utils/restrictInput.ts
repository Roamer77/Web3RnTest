export const restrictInput = (input: string) => {
  const condition = new RegExp(/^[0-9]*\.?[0-9]*$/);
  return input.match(condition);
};
