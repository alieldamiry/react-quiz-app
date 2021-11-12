import randomizeQuestions from "./utils/randomizeQuestions";

const questions = [
  {
    id: 1,
    text: "Which of the following is correct about JavaScript?",
    userAnswerId: null,
    correctId: 4,
    options: [
      {
        id: 1,
        text: "JavaScript is a lightweight, interpreted programming language.",
      },
      {
        id: 2,
        text: "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
      },
      {
        id: 3,
        text: "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
      },
      {
        id: 4,
        text: "All of the above.",
      },
    ],
  },
  {
    id: 2,
    text: "How can you get the type of arguments passed to a function?",
    userAnswerId: null,
    correctId: 5,
    options: [
      {
        id: 5,
        text: "using typeof operator",
      },
      {
        id: 6,
        text: "using getType function",
      },
      {
        id: 7,
        text: "Both of the above.",
      },
      {
        id: 8,
        text: "None of the above.",
      },
    ],
  },
  {
    id: 3,
    text: "Which of the following type of variable is visible only within a function where it is defined?",
    userAnswerId: null,
    correctId: 10,
    options: [
      {
        id: 9,
        text: "global variable",
      },
      {
        id: 10,
        text: "local variable",
      },
      {
        id: 11,
        text: "Both of the above.",
      },
      {
        id: 12,
        text: "None of the above.",
      },
    ],
  },
  {
    id: 4,
    text: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
    userAnswerId: null,
    correctId: 14,
    options: [
      {
        id: 13,
        text: "toExponential()",
      },
      {
        id: 14,
        text: "toFixed()",
      },
      {
        id: 15,
        text: "toPrecision()",
      },
      {
        id: 16,
        text: "toLocaleString()",
      },
    ],
  },
  {
    id: 5,
    text: "Which of the following function of Number object defines how many total digits to display of a number?",
    userAnswerId: null,
    correctId: 20,
    options: [
      {
        id: 17,
        text: "toExponential()",
      },
      {
        id: 18,
        text: "toFixed()",
      },
      {
        id: 19,
        text: "toLocaleString()",
      },
      {
        id: 20,
        text: "toPrecision()",
      },
    ],
  },
];

export default randomizeQuestions(questions);
