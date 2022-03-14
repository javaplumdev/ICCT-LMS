import { feedData } from '../feedData.js';
const questionData = localStorage.question;
const questionKeyInHomePage = localStorage.questionKeyInHomePage;

feedData.forEach((props) => {
	if (questionData == props.question) {
		const questions = props.questions;

		document.getElementsByTagName(
			'title'
		)[0].innerHTML = `ICCT LMS Quiz | ${props.subjectName}`;

		const quizTitle = document.querySelector('.quiz-title');

		quizTitle.innerHTML = `
            <div class="d-flex align-items-center justify-content-around p-4">
                <div>
                    <div class="row">
                    <p>Subject: <b>${props.subjectName}</b></p>
                    </div>
                    <div class="row">
                    <p>Title: ${props.quizDetails.title}</p>
                    </div>
                    <div class="row">
                        <p>${props.quizDetails.instruction}</p>
                    </div>
                    <div class="row">
                        <p>No. Items: ${questions.length}</p>
                    </div>
                </div>
            </div>
            
        `;

		questions.forEach((props) => {
			const quizContainer = document.querySelector('.quiz-container');

			const quizContainerDiv = document.createElement('div');

			quizContainerDiv.innerHTML = `
                    <div class="bg-light shadow rounded p-4 my-4">
                        <div class="d-flex align-items-center">
                            <p >${props.questionNum})</p>
                            <p class="mx-2" id="question">${props.question}</p>
                        </div>
                        <ul class="list-unstyled">
                            <li>
                                <input type="radio" id="a" name="${props.questionNum}" class="answer"/>
                                <label>${props.a}</label>
                            </li>
                            <li>
                                <input type="radio" id="b" name="${props.questionNum}" class="answer"/>
                                <label >${props.b}</label>
                            </li>
                            <li>
                                <input type="radio" id="c" name="${props.questionNum}" class="answer"/>
                                <label >${props.c}</label>
                            </li>
                            <li>
                                <input type="radio" id="d" name="${props.questionNum}" class="answer"/>
                                <label>${props.d}</label>
                            </li>
                        </ul>
                    </div>
                        
                    `;

			quizContainer.appendChild(quizContainerDiv);

			//quiz - contents
			let score = 0;

			const submit = document.getElementById('submit');
			const radioButtons = document.querySelectorAll(
				`input[name="${props.questionNum}"]`
			);

			submit.addEventListener('click', () => {
				let answer;

				radioButtons.forEach((item) => {
					if (item.checked) {
						answer = item.id;
					}
				});

				if (answer === props.correct) {
					console.log('correct');
					score++;
				} else {
					console.log('false');
				}

				console.log(`Your score is ${score} / ${questions.length}`);
			});
		});
	}
});

// For javascript animation
// We used scroll reveal library for this system
const contents = document.querySelector('.content');
ScrollReveal().reveal('.contents', { delay: 500 });
