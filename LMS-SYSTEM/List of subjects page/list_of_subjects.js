import { feedData } from '../feedData.js';

const listOfSubjects = document.querySelector('.subject-container');

feedData.forEach((i) => {
	const subjectsFeed = document.createElement('div');

	subjectsFeed.innerHTML = ` 
    <div class="contents bg-light p-4 rounded mt-3 ">
        <div class="div d-flex justify-content-between">
            <div class="contents-titles">
                <h4 class="subjectTitle">${i.subjectName}</h4>
                    
                </div>
                    <a href="${i.subjectLink}" target="_blank"><button class="btn btn-primary">View Subject</button></a>
                </div>
            </div>
        </div>
    </div>
    `;

	listOfSubjects.appendChild(subjectsFeed);
});

// For animation javascript

const contents = document.querySelector('.content');

ScrollReveal().reveal('.contents', { delay: 500 });
