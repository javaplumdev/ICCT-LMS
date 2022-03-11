import { feedData } from '../feedData.js';

const math = 'MATH';

feedData.forEach((i) => {
	if (math === i.subjectName) {
		const quizContainer = document.querySelector('.quiz-container');
		const subjectTitle = document.querySelector('.subject-title');

		subjectTitle.innerHTML = `
    <form class="bg-light p-4 rounded">
        <h3> ${i.subjectName} </h3>
    </form>

    <hr />
    `;

		quizContainer.innerHTML = `
    <div class="contents bg-light p-4 rounded mt-3">
    <div class="div d-flex justify-content-between">
        <div class="contents-titles">
            <h4>QUIZ</h4>
        </div>
        <button class="btn btn-primary h-25">Take quiz</button>
    </div>
    <br />
    <div class="contents-details border p-2">
        <div class="row">
            <p>Chapter: 01</p>
        </div>
        <div class="row">
            <p>Title</p>
        </div>
        <div class="row">
            <p>Due Date</p>
        </div>
        <div class="row">
            <p>No. Items</p>
        </div>
    </div>
</div>
    `;
	}
});

// feedData.forEach((i) => {
// 	const quizContainer = document.querySelector('.quiz-container');
// 	const subjectTitle = document.querySelector('.subject-title');

// 	subjectTitle.innerHTML = `
//     <form class="bg-light p-4 rounded">
//         <h3> ${i.subjectName} </h3>
//     </form>

//     <hr />
//     `;

// 	quizContainer.innerHTML = `
//     <div class="contents bg-light p-4 rounded mt-3">
//     <div class="div d-flex justify-content-between">
//         <div class="contents-titles">
//             <h4>QUIZ</h4>
//         </div>
//         <button class="btn btn-primary h-25">Take quiz</button>
//     </div>
//     <br />
//     <div class="contents-details border p-2">
//         <div class="row">
//             <p>Chapter: 01</p>
//         </div>
//         <div class="row">
//             <p>Title</p>
//         </div>
//         <div class="row">
//             <p>Due Date</p>
//         </div>
//         <div class="row">
//             <p>No. Items</p>
//         </div>
//     </div>
// </div>
//     `;
// });
