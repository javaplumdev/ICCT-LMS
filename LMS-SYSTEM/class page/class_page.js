// Importing the feed data
import { subjectsAvailable } from '../subjectsAvailable.js';
import { feedData } from '../feedData.js';

// Selectors
const feedContainer = document.querySelector('.feed-container');
const enrollBtn = document.querySelector('.enroll-btn');
const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');
const viewSubjectButton = document.getElementsByClassName('view-subject');

// Show modal
var myModal = new bootstrap.Modal(document.getElementById('myModal'));

const filteredArr = subjectsAvailable.reduce((acc, current) => {
	const x = acc.find((item) => item.subjectName === current.subjectName);
	if (!x) {
		return acc.concat([current]);
	} else {
		return acc;
	}
}, []);

// Printing all of subjects
filteredArr.forEach((props) => {
	const subjectsFeed = document.createElement('div');

	subjectsFeed.innerHTML = `
        <div class="contents bg-light p-4 rounded mt-3 ">
            <div class="div d-sm-flex justify-content-between">
                <div class="contents-titles">
                    <h5 class="subjectTitle">${props.subjectName}</h5>
                    </div>
                        <button class="view-subject btn btn-primary">See subject</button>
                    </div>
                </div>
            </div>
        </div>`;

	// Appending all of the subjectsFeed in list of subjects
	feedContainer.appendChild(subjectsFeed);
});

function goToPage() {
	for (let i = 0; i < viewSubjectButton.length; i++) {
		const button = viewSubjectButton[i];

		button.addEventListener('click', function () {
			modalTitle.innerHTML = subjectsAvailable[i].subjectName;

			modalBody.innerHTML = `
                <p>All of the subjects details will be here.</p>
            `;

			// Showing the modal
			myModal.show();
		});
	}
}

enrollBtn.addEventListener('click', function (event) {
	const buttonClicked = event.target;
	const modalSubjectName =
		buttonClicked.parentElement.parentElement.children[0].children[0].innerHTML;

	feedData.forEach((data) => {
		if (data.subjectName === modalSubjectName) {
			modalBody.innerHTML = `
                <p>You are already enrolled in this subject. Please check your list of subjects page.</p>
            `;
		} else {
			modalBody.innerHTML = `
                <p>Congratulations! You are now enrolled. Please check your list of subjects page.</p>
            `;

			subjectsAvailable.forEach((data) => {
				if (data.subjectName === modalSubjectName) {
					feedData.push(data);
				}
			});
		}
	});

	const filteredArr = feedData.reduce((acc, current) => {
		const x = acc.find((item) => item.subjectName === current.subjectName);
		if (!x) {
			return acc.concat([current]);
		} else {
			return acc;
		}
	}, []);

	console.log(filteredArr);
});

//Calling the functions
goToPage();
