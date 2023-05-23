import sound1 from "../assets/instructionaudio1.mp3";
import sound2 from "../assets/instructionaudio2.mp3";

const INSTRUCTION_STEPS_FORWARD = [
  {
    stepIndex: 1,
    content: `<h2>Welcome to the experiment!</h2>
        <p>
        In any given situation there is a limit to the number of objects or stimuli which can be immediately grasped and remembered by the individual. When you attend to a stimuli there is a possibility of that getting stored in the memory. This stimuli is stored for a short period of time. Only when it is processed further it will get stored in the long term memory.
        </p>
        <p>
        In any given situation, there are several objects or stimuli which a person can attend too, however there is a limit on how many of them can be placed in memory, this capacity is moderated by phenomenon known as primacy and recency effects. In the research it seen the high level of retention for the first few items(digits) which is called the primacy effect and also the last few items(digits) which is called due to recency effect. 
        </p>
        <p>Through this experiment we understand the phenomena of short term memory and the effects called primacy and recency</p>
        
        `,
    buttonLabel2: "Next",
  },

  {
    stepIndex: 2,
    content: `
        <h2>Conditions to be followed while conducting the experiment / Precautions!</h2>
        <p>The student or the subject will have to sit 1 ft away from the screen.</p>
        <p>The subject will have to sit comfortably in a quiet and well-ventilated room.</p>
        <p>If the subject is using phone/ tab to conduct the experiment then it is mandatory for him/her to put the phone on Do Not Disturb (DND) mode in order to avoid any disruptions.</p>
        <p>The subject will have to sit in an isolated room so that he/she will not get distractedPlease keep a notebook and a pen while you are conducting the experiment because you may have to note down some information.</p>
        `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },

  {
    stepIndex: 3,
    content: `
        <h2>General Instructions</h2>
          <h4>Note:This experiment has to be written in your record book. Please adhere to the below format.</h4>
          <p>1.Introduction</p>
          <p>2.Materials required</p>
          <p>3.Purpose</p>
          <p>4.Particulars of the subject/student [Name,Enrollment No,Age,Date]</p>
          <p>5.Procedure for conduction</p>
          <p>6.Results</p>
          <p>7.Discussions</p>
          <p>8.Conclusion</p>
          <p>9.Practical application</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 4,
    content: `
        <h4>Note that, this experiment has 2 conditions. Please pay attention as each condition has specific instructions.</h4>
        <h4>Please be alert while doing this experiment, because the stimuli exposure time is
        only 1/10th of a second and you have to respond immediately.</h4>
        `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 5,
    content: `
        <h4>Now we will begin the experiment!</h4>        
        <h2>Instructions</h2>
        Condition 1 – Digits (Forward)</h2>
        <p>Please sit comfortably and feel relaxed and look at the screen carefully.</p>
        <p>You will be presented with few digits on the screen for a short period of time. 
          Please respond in the same order as you have seen.</p>
        <p>You will see a keypad on the screen to enter your responses.
         Do not forget to click on the <b>Submit</b> button after entering your responses. </p>
        <p>Continue the process till the experiment stops.
        (If you fail 2 times continuously with a set of digits, condition 1 of the experiment will get terminated).</p>
        <p>Respond as quickly and as accurately as possible.</p>
        `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
    voiceInstruction: sound2,
  },

  {
    stepIndex: 6,
    content: `<p>As soon as you click on the End instructions button,
     The word "Ready" will appear on the screen and the experiment will begin.</p>`,
    buttonLabel1: "Back",
    buttonLabel2: "End Instructions",
  },
];

const INSTRUCTION_STEPS_BACKWARD = [
  {
    stepIndex: 1,
    content: `
        <h2>Instructions</h2> 
        <h4>Condition 2 – Digits(Backward)</h4>
        <p>Please sit comfortably and feel relaxed and look at the screen carefully.</p>
        <p>You will be presented with few digits on the screen for a short period of time.
         You will have to respond by clicking on the numbers in a backward manner.
         For example, if you have seen digits <b>5836</b> will have to answer it as <b>6385</b></p>
        <p>You will see a keypad on the screen to enter your responses.
          Do not forget to click on the submit button after entering your responses. </p>
        <p>Continue the process till the experiment stops. (If you fail 2 times continuously 
         a set of digits, the experiment will get terminated).</p>
        <p>Respond as quickly and as accurately as possible.</p> 
        `,
    buttonLabel2: "Next",
    voiceInstruction: sound2,
  },
  {
    stepIndex: 2,
    content: `<p>As soon as you click on the End instructions button,
     The word "Ready" will appear on the screen and Condition-2 of the experiment will begin.</p>`,
    buttonLabel1: "Back",
    buttonLabel2: "End Instructions",
  },
];

export { INSTRUCTION_STEPS_FORWARD, INSTRUCTION_STEPS_BACKWARD };
