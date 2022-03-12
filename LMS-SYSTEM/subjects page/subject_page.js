// Importing the feed data
import { feedData } from '../feedData.js';

const subjectData = localStorage.subjectName;

// Printing the feed data based in the if else code
feedData.forEach((props) => {
	if (subjectData == props.subjectName) {
		// For specific head title
		document.getElementsByTagName(
			'title'
		)[0].innerHTML = `ICCT LMS | ${props.subjectName}`;

		// Selectors
		const quizContainer = document.querySelector('.quiz-container');
		const subjectTitle = document.querySelector('.subject-title');

		// Printing the properties and its values
		subjectTitle.innerHTML = `
        <form class="bg-light p-4 rounded">
            <h3> ${props.subjectName} </h3>
        </form>

        <hr />
        `;

		quizContainer.innerHTML = `
        <div class="contents bg-light p-4 rounded mt-3">
        <div class="div d-flex justify-content-between">
            <div class="contents-titles d-flex flex-column">
                <h4>QUIZ</h4>
                <small class="text-secondary">Chapter: ${props.quizDetails.chapter}</small>
                <small class="text-secondary">Due Date</small>
            </div>
            <button class="btn btn-primary h-25">Take quiz</button>
        </div>
        <br />
        <div class="contents-details border p-2">
            <div class="row">
                <p>Title: ${props.quizDetails.title}</p>
            </div>
            <div class="row">
                <p>${props.quizDetails.instruction}</p>
            </div>
            <div class="row">
                <p>No. Items: ${props.quizDetails.numberOfItems}</p>
            </div>
        </div>
    </div>
            `;
	}
});

// For javascript animation
// We used scroll reveal library for this system
const contents = document.querySelector('.content');
ScrollReveal().reveal('.contents', { delay: 500 });
