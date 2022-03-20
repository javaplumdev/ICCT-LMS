// importing data from the feeddata
import { feedData } from '../feedData.js';

// Local storage
const keyId = localStorage.keyId;

// Global variables
const questionNum = document.getElementById('questionNum');
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let questions;
let subjectDetails;
let currentQuizData;

loadQuiz();

// Manipulating the DOM elements usin the innertext
function loadQuiz() {
	// Using foreach in imported feedData to check some conditions below
	feedData.forEach((props) => {
		// Assigning some variables properties from the feedData
		questions = props.questions;

		// For specific head title
		document.getElementsByTagName(
			'title'
		)[0].innerHTML = `ICCT LMS | ${props.subjectName}`;

		if (keyId == props.keyId) {
			currentQuizData = questions[currentQuiz];
			deselectAnswers();
			subjectDetails = props;

			questionNum.innerText = `${currentQuizData.questionNum}.) `;
			questionElement.innerText = currentQuizData.question;
			a_text.innerText = currentQuizData.a;
			b_text.innerText = currentQuizData.b;
			c_text.innerText = currentQuizData.c;
			d_text.innerText = currentQuizData.d;
		}
	});
}

// When the user clicked an radio button, the function will return its value
function getSelected() {
	let answer = undefined;

	answerElements.forEach((answerElement) => {
		if (answerElement.checked) {
			answer = answerElement.id;
		}
	});

	return answer;
}

// When the page reloaded with new questions, the previously selected radiobutton will reset
function deselectAnswers() {
	answerElements.forEach((answerElement) => {
		answerElement.checked = false;
	});
}

// Using event listener to reload the next page
submitBtn.addEventListener('click', () => {
	// check to see the answer
	// storing the function in which returning an value
	const answer = getSelected();

	// If the answer equals to the correctanswer from the feed data
	if (answer) {
		if (answer === currentQuizData.correct) {
			// Will increment the score
			score++;
		}

		// Will automatically reloads from the next page
		currentQuiz++;
		if (currentQuiz < questions.length) {
			// Will continue reloading the page until it reached its length
			loadQuiz();
		} else {
			// After that code of block will show the user's score as well as the other details
			quiz.innerHTML = `
			<div class="contents bg-light p-4 rounded mt-3">
			<div class="div d-flex justify-content-between">
				<div class="contents-titles d-flex flex-column">
					<h4>${subjectDetails.subjectName} quiz</h4>
					<p>You scored <b>${score}</b> over <b>${questions.length}</b> questions.</p>
				</div>
				<button id="go-back" class="h-25 btn btn-primary">Go back</button>
			</div>
			<div class="contents-details border p-2">
				<div class="row">
					<p>Title: ${subjectDetails.quizDetails.title}</p>
				</div>
				<div class="row">
					<p>${subjectDetails.quizDetails.instruction}</p>
				</div>
			</div>
		</div>   			
                `;

			// Then a button will show to redirect you from the home page
			const goBackButton = document.getElementById('go-back');
			goBackButton.addEventListener('click', function () {
				location.href = '../home_page.html';
			});
		}
	}
});
