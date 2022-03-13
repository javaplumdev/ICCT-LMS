import { feedData } from '../feedData.js';

const questionData = localStorage.question;

// feedData.forEach((props) => {
// 	if (questionData === props.question) {
// 		console.log(props.questions);
// 	}
// });

const data = [
	{
		subjectName: 'Math',
		quizDetails: {
			numberOfItems: 20,
			chapter: 1,
			instruction:
				'MULTIPLE CHOICE. Read and understand the statement carefully and choose the letter of the correct answer.',
			title: 'Article Writing Tips For Beginners',
			quizLengthTime: 5,
		},
		subjectLink: '../subjects page/subject_page.html',
		quizLink: '../quiz page/quiz_page.html',
		question: 'math 1',
		questions: [
			{
				tanong: 'Pogi ba ako?',
				question: 'oo',
			},
			{
				tanong: 'HIndi ba ako pogi?',
				question: 'oo',
			},
		],
	},
];

data.forEach((props, index) => {
	console.log(props.questions[index].tanong);
});

// For javascript animation
// We used scroll reveal library for this system
const contents = document.querySelector('.content');
ScrollReveal().reveal('.contents', { delay: 500 });
