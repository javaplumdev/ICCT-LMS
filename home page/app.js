import { subjectData } from './feed.js';

const feedContainer = document.querySelector('.feed-container');

subjectData.forEach((i) => {
	const announcementFeed = document.createElement('div');

	announcementFeed.innerHTML = ` 
    <div class="contents bg-light p-4 rounded mt-3">
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
                    <a href="./question.html"><button class="btn btn-primary">Take quiz</button></a>
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

	feedContainer.appendChild(announcementFeed);
});

// For animation javascript

const contents = document.querySelector('.content');

ScrollReveal().reveal('.contents', { delay: 500 });
