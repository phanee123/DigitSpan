import { NUMPAD_DIGITS } from "../constants/general";

function generateRandomNumbers(n) {
  const digits = [...NUMPAD_DIGITS];
  const shuffledDigits = shuffleArray(digits);
  return shuffledDigits.slice(0, n);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function arrayEquals(a, b, flowStatus) {
  if (flowStatus === "REVERSE") {
    const c = [...b].reverse();
    return Array.isArray(a) && Array.isArray(c) && a.length === c.length && a.every((val, index) => val === c[index]);
  } else
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}
export { generateRandomNumbers, arrayEquals };
