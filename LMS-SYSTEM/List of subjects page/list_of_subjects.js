// Importing the feed data
import { feedData } from '../feedData.js';

// Selectors
const listOfSubjects = document.querySelector('.subject-container');

// Printing all of subjects
feedData.forEach((props) => {
	const subjectsFeed = document.createElement('div');

	console.log(props.subjectName);

	subjectsFeed.innerHTML = `
        <div class="contents bg-light p-4 rounded mt-3 ">
            <div class="div d-flex justify-content-between">
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
			localStorage.setItem('subjectName', feedData[i].subjectName);

			location.href = `${feedData[i].subjectLink}`;
		});
	}
}

// For javascript animations
// We used scroll reveal library
const contents = document.querySelector('.content');
ScrollReveal().reveal('.contents', { delay: 500 });

//Calling the functions
goToPage();
