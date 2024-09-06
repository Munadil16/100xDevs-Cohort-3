import { quizData } from "./data.js";

const question = document.getElementById("question");
const a = document.querySelector(".option1");
const b = document.querySelector(".option2");
const c = document.querySelector(".option3");
const d = document.querySelector(".option4");
const btn = document.querySelector(".button");

question.textContent = quizData[0].question;
a.textContent = quizData[0].a;
b.textContent = quizData[0].b;
c.textContent = quizData[0].c;
d.textContent = quizData[0].d;

let questionNumber = 0;
let answers = [];

function handleClick() {
  const options = document.querySelectorAll('input[name="option"]');
  const selectedOption = Array.from(options).find((option) => option.checked);

  if (!selectedOption) {
    alert("Please select an option before proceeding.");
  } else {
    answers.push(selectedOption.value);
    questionNumber++;

    if (questionNumber === quizData.length) {
      document.querySelector(".question-article").innerHTML = "";
      displayResult();
      return;
    }

    question.textContent = quizData[questionNumber].question;
    a.textContent = quizData[questionNumber].a;
    b.textContent = quizData[questionNumber].b;
    c.textContent = quizData[questionNumber].c;
    d.textContent = quizData[questionNumber].d;

    if (questionNumber === quizData.length - 1) {
      btn.textContent = "Submit";
    }
  }
}

function displayResult() {
  let score = 0;

  for (let i = 0; i < quizData.length; i++) {
    if (answers[i] === quizData[i].correct) {
      score++;
    }
  }

  const answerElt = document.querySelector(".answer-article");
  answerElt.style.display = "flex";

  if (score === 0) {
    answerElt.firstChild.textContent = `Congrats! You are DUMB, coz. your score is ${score}.`;
  } else {
    answerElt.firstChild.textContent = `Congrats! Your Score is ${score}.`;
  }
}

btn.addEventListener("click", handleClick);

document.querySelector(".reset").addEventListener("click", () => {
  window.location.reload();
});
