import { feedData } from './feedData.js';

//Selectors
const feedContainer = document.querySelector('.feed-container');
const alert = document.querySelector('.alert');

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

console.log(time);

contentPost.addEventListener('click', function (e) {
	e.preventDefault();

	if (formContent.value == '') {
		alert.innerHTML = `<small class="text-danger">Please enter an input!</small>`;
	} else {
		const contentMessage = document.createElement('div');

		contentMessage.innerHTML = `
            <div class="content-post bg-light p-4 rounded mt-3">
            <div class="detailsContent">
                    <div class="d-flex align-items-center justify-content-between">
                        <h6>This is the user's name</h6>
                        <button class="btn-close" aria-label="Close"></button>
                    </div>
                    <small class="py-2">${date.getMonth()}/${date.getDate()}/${date.getFullYear()} - ${time}</small>
                <div class="details-content border p-2">
                    <p>${formContent.value}</p>
                </div>
            </div>
            </div>
        `;

		feedContainer.appendChild(contentMessage);

		// This code is for deleting posts
		const contentPostCollection =
			document.getElementsByClassName('content-post');

		for (let i = 0; i < contentPostCollection.length; i++) {
			const closeButton = contentPostCollection[i];

			closeButton.addEventListener('click', function (event) {
				const closeButtonClicked = event.target;

				closeButtonClicked.parentElement.parentElement.parentElement.remove();
			});
		}

		formContent.value = '';
		alert.innerHTML = `<small class="text-primary">Posted!</small>`;
		console.log('posted');
	}
});

// For printing all of the subjects
feedData.forEach((i) => {
	const subjectsFeed = document.createElement('div');

	subjectsFeed.innerHTML = ` 
    <div class="contents bg-light p-4 rounded mt-3 ">
        <div class="div d-flex justify-content-between">
            <div class="contents-titles">
                <h4 class="subjectTitle">${i.subjectName}</h4>
                    <p
                    >Quiz 1 : Chapter 1 <br />
                    <small class="text-muted"
                    >Dute date: March 20, 11:59PM</small
                    ></p
                    >
                </div>
                    <a href="#"><button class="btn btn-primary">Take quiz</button></a>
                </div>


                <div class="contents-details border p-2">
                    <div class="row">
                        <div class="col">
                        <p>Title and Instruction: </p>
                        <p>20 questions ● 60 minutes</p>
                        <p
                        >${i.instruction}</p
                        >
                </div>
            </div>
        </div>
    </div>
    `;

	feedContainer.appendChild(subjectsFeed);
});

// For animation javascript

const contents = document.querySelector('.content');

ScrollReveal().reveal('.contents', { delay: 500 });
