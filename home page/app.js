import { feedData } from './feed.js';

const feedContainer = document.querySelector('.feed-container');
const alert = document.querySelector('.alert');

const formContent = document.getElementById('textarea');
const contentPost = document.getElementById('content-post');

contentPost.addEventListener('click', function (e) {
	e.preventDefault();

	if (formContent.value == '') {
		alert.innerHTML = `<small class="text-danger">Please enter an input!</small>`;
	} else {
		formContent.value = '';
		alert.innerHTML = `<small class="text-primary">Posted!</small>`;
		console.log('posted');
	}
});

feedData.forEach((i) => {
	const subjectsFeed = document.createElement('div');
	const contentFeed = document.createElement('div');

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
