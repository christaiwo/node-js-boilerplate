export const trimSentence = (sentence: string, maxLength: number) => {
  if (sentence.length <= maxLength) {
    return sentence;
  } else {
    return sentence.substring(0, maxLength) + "...";
  }
};

export const extractSubstring = (
  sentence: string,
  start: number,
  end: number
) => {
  if (start < 0) {
    start = 0;
  }
  if (end > sentence.length) {
    end = sentence.length;
  }
  return sentence.substring(start, end);
};
