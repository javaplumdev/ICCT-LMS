// Importing the feed data
import { feedData } from '../feedData.js';

// Selectors
const listOfSubjects = document.querySelector('.subject-container');

const filteredArr = feedData.reduce((acc, current) => {
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
                    <h4 class="subjectTitle">${props.subjectName}</h4>

                    </div>
                        <button class="view-subject btn btn-primary">View Subject</button>
                    </div>
                </div>
            </div>
        </div>`;

	// Appending all of the subjectsFeed in list of subjects
	listOfSubjects.appendChild(subjectsFeed);
});

// For redirecting a web page
// This code will redirect you from another page

function goToPage() {
	const viewSubjectButton = document.getElementsByClassName('view-subject');

	for (let i = 0; i < viewSubjectButton.length; i++) {
		const button = viewSubjectButton[i];

		button.addEventListener('click', function () {
			// Having local storage so that other javascript files can access the local data
			localStorage.setItem('subjectName', filteredArr[i].subjectName);

			location.href = `${filteredArr[i].subjectLink}`;
		});
	}
}

//Calling the functions
goToPage();
