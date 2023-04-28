const INSTRUCTION_STEPS_FORWARD = [
  {
    stepIndex: 1,
    content: `<h2>Welcome to the experiment!</h2>
        <p>
          In our day to day life, numerous stimuli act upon our sense organs. Yet we notice and attend to very few
          objects or events. Hence, Attention is defined as the act of focusing our consciousness on an object or an
          event.
        </p>
        <p>
          In this experiment, we will try to understand how much we can grasp in one short presentation with different
          types of stimuli, such as, dots, words, nonsense syllables and numbers
        </p>`,
    buttonLabel2: "Next",
  },
  {
    stepIndex: 2,
    content: `
        <h2>Instructions</h2>
        <p>
          In this experiment, to study span of attention five different types of visual stimuli/ conditions will be
          presented.
        </p>
        <p>Each condition will be administered separately.</p>
        <p>And, instructions are given separately for each condition.</p>
        <p>*For Demo purposes we are only presenting one condition.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 3,
    content: `
        <h2>Precautions</h2>
        <p>1.The subject has to sit 1-2 ft away from the screen.</p>
        <p>2.The subject has to sit in an isolated room so that he/she will not get distracted.</p>
        <p>3.If the subject is using phones/ tabs then its mandatory to put the phone on DND mode.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 4,
    content: `
        <h2>Condition 1 - Digits</h2>
        <p>Please sit comfortably and feel relaxed. Look at the screen carefully.</p>
        <p>The word "Ready" will appear on the screen.</p>
        <p>After that, few digits will be presented on the screen for a short duration on the screen.</p>
        <p>Remember the numbers you see.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 5,
    content: `
        <p>Once you have remembered the numbers presented, you need to repeat them.</p>
        <p>You will see a key pad on the screen to enter your responses.</p>
        <p>Use the mouse to enter the numbers.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },

  {
    stepIndex: 6,
    content: `<p>Experiment will start after you end instructions.</p>`,
    buttonLabel1: "Back",
    buttonLabel2: "End Instructions",
  },
];

const INSTRUCTION_STEPS_BACKWARD = [
  {
    stepIndex: 1,
    content: `
        <p>BACK Ward Instructions</p>`,
    buttonLabel2: "Next",
  },
  {
    stepIndex: 2,
    content: `<p>Experiment will start after you end instructions.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "End Instructions",
  },
];

export { INSTRUCTION_STEPS_FORWARD, INSTRUCTION_STEPS_BACKWARD };
