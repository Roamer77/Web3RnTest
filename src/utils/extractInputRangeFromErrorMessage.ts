export const extractInputRangeFromErrorMessage = (errorMessage: string) => {
  const getMaxInput = new RegExp('max:\\s*(-?\\d+(?:.\\d+)?)');
  const getMinInput = new RegExp('Min:\\s*(-?\\d+(?:.\\d+)?)');

  const max = errorMessage.match(getMaxInput)?.[1];
  const min = errorMessage.match(getMinInput)?.[1];

  return {max: Number(max), min: Number(min)};
};
