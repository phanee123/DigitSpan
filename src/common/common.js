const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomNumbers = (length) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    const random = randomIntFromInterval(9, 1);
    result.push(random);
  }
  return result;
};
function arrayEquals(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}
export { generateRandomNumbers, arrayEquals };
