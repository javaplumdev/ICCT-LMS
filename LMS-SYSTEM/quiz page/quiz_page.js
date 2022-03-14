import { feedData } from '../feedData.js';
const questionData = localStorage.question;

// Global variables
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let questions;

feedData.forEach((props) => {
	questions = props.questions;
});

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = questions[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener('click', () => {
	// check to see the answer
	const answer = getSelected();

	if (answer) {
		if (answer === questions[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if (currentQuiz < questions.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${questions.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
		}
	}
});

// For javascript animation
// We used scroll reveal library for this system
const contents = document.querySelector('.content');
ScrollReveal().reveal('.contents', { delay: 500 });
