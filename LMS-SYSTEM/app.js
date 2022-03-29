// Importing all of the data
import { feedData } from './feedData.js';

// Selectors by class
const feedContainer = document.querySelector('.feed-container');
const alert = document.querySelector('.alert');

// Selectors by ID
const formContent = document.getElementById('textarea');
const contentPost = document.getElementById('content-post');

//For date
const date = new Date();

// For converting the 24hrs to 12hrs
const time = date.toLocaleString('en-US', {
	hour: 'numeric',
	minute: 'numeric',
	hour12: true,
});

// This block of code is for the user posts
contentPost.addEventListener('click', function (e) {
	// Preventing the page to reload
	e.preventDefault();

	// Checking if the user has enter a value or not
	if (formContent.value == '') {
		alert.innerHTML = `<small class="text-danger">Please enter an input!</small>`;
	} else {
		const contentMessage = document.createElement('div');

		// Printing the code
		contentMessage.innerHTML = `
            <div class="content-post bg-light p-4 rounded mt-3">
            <div class="detailsContent">
                    <div class="d-flex align-items-center justify-content-between">
                        <h6>This is the user's name</h6>
                        <button class="btn-close" aria-label="Close"></button>
                    </div>
                    <small class="py-2 text-secondary">${date.getMonth()}/${date.getDate()}/${date.getFullYear()} - ${time}</small>
                <div class="details-content border py-2">
                    <p>${formContent.value}</p>
                </div>
            </div>
            </div>
        `;

		// Appending the contentMessage from the feed container
		feedContainer.appendChild(contentMessage);

		// This code is for deleting posts
		const btnClose = document.getElementsByClassName('btn-close');

		// When the user clicked the close button by the time it was posted, it can delete immediately
		for (let i = 0; i < btnClose.length; i++) {
			const closeButton = btnClose[i];

			closeButton.addEventListener('click', function (event) {
				const closeButtonClicked = event.target;
				closeButtonClicked.parentElement.parentElement.parentElement.remove();
			});
		}

		// Remove the form content value by the time it was posted
		formContent.value = '';

		// Telling the user that the post was posted
		alert.innerHTML = `<small class="text-primary">Posted!</small>`;

		// Checking if the content is posted or not
		console.log('posted');
	}
});

// For printing all of the subjects
feedData.forEach((props) => {
	const subjectsFeed = document.createElement('div');
	const moduleContainer = document.createElement('div');

	subjectsFeed.innerHTML = ` 
    <div class="contents bg-light p-4 rounded mt-3 ">
        <div class="div d-flex justify-content-between">
            <div class="contents-titles">
                <h4 class="subjectTitle">${props.subjectName}</h4>
                    <p
                    >Quiz 1 : Chapter ${props.quizDetails.chapter} <br />
                    <small class="text-muted"
                    >Dute date: March 20, 11:59PM</small
                    ></p
                    >
                </div>
                    <button class="view-quiz btn btn-primary h-25">Take quiz</button>
                </div>
                <div class="contents-details border p-2">
                    <div class="row">
                        <div class="col">
                        <p>Title: ${props.quizDetails.title}</p>
                        <p>${props.questions.length} questions ● ${props.quizDetails.quizLengthTime} minutes</p>
                        <p
                        >${props.quizDetails.instruction}</p
                        >
                </div>
            </div>
        </div>
    </div>
    `;

	moduleContainer.innerHTML = ` <div class="contents bg-light p-4 rounded mt-3">
        <div class="div d-flex justify-content-between">
            <div class="contents-titles d-flex flex-column">
                <p>Subject: <b>${props.subjectName}</b></p>
                <p>Chapter: ${props.quizDetails.chapter} module</p>
            </div>
            <button class="btn btn-primary h-25">View module</button>
        </div>
    </div>
            `;

	feedContainer.appendChild(subjectsFeed);
	feedContainer.appendChild(moduleContainer);
});

function goToQuiz() {
	const viewquiz = document.getElementsByClassName('view-quiz');

	for (let i = 0; i < viewquiz.length; i++) {
		const button = viewquiz[i];

		button.addEventListener('click', function () {
			// Having local storage so that other javascript files can access the local data
			localStorage.setItem('keyId', feedData[i].keyId);

			location.href = `${feedData[i].quizLinkAtHomePage}`;
		});
	}
}

goToQuiz();
