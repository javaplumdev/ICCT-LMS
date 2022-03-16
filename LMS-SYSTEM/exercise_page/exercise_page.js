import { feedData } from '../feedData.js';

const feedContainer = document.querySelector('.feed-container');

// For printing all of the subjects
feedData.forEach((props) => {
	const subjectsFeed = document.createElement('div');

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

	feedContainer.appendChild(subjectsFeed);
});

function goToQuiz() {
	const viewquiz = document.getElementsByClassName('view-quiz');

	for (let i = 0; i < viewquiz.length; i++) {
		const button = viewquiz[i];

		button.addEventListener('click', function () {
			// Having local storage so that other javascript files can access the local data
			localStorage.setItem('keyId', feedData[i].keyId);

			location.href = `${feedData[i].quizLink}`;
		});
	}
}

goToQuiz();
