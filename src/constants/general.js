const NUMPAD_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const START_TEST_WITH_DIGIT = 3;
const END_TEST_WITH_DIGIT = 9;
const NUMBER_OF_SECONDS = 15;
const NUM_QUESTIONS_INTERVENTION = 12;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
export {
  NUMPAD_DIGITS,
  NUMBER_OF_SECONDS,
  START_TEST_WITH_DIGIT,
  END_TEST_WITH_DIGIT,
  getRandomInt,
  NUM_QUESTIONS_INTERVENTION,
};
