import {extractInputRangeFromErrorMessage} from '../../../utils/extractInputRangeFromErrorMessage';

export const createErrorMessage = (
  errorCode: number,
  errorMessage: string,
  userEnteredAmount: number,
) => {
  if (errorCode === 422) {
    const validRange = extractInputRangeFromErrorMessage(errorMessage);
    if (userEnteredAmount < validRange.min) {
      return `Minimum available amount: ${validRange.min}`;
    }
    if (userEnteredAmount > validRange.max) {
      return `Maximum available amount: ${validRange.max}`;
    }
  }
};
