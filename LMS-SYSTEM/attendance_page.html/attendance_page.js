import { feedData } from '../feedData.js';

const filteredArr = feedData.reduce((acc, current) => {
	const x = acc.find((item) => item.subjectName === current.subjectName);
	if (!x) {
		return acc.concat([current]);
	} else {
		return acc;
	}
}, []);

const feedContainer = document.querySelector('.feed-container');

filteredArr.forEach((props) => {
	const attendanceDiv = document.createElement('div');

	console.log(props.subjectName);
	attendanceDiv.innerHTML = `
        <div class="contents p-4">
            <div class="d-flex">
                <div><h4>${props.subjectName}</h4></div>
            </div>
            <div class="d-flex my-3">
                <button class="btn btn-primary w-75">Present</button>
                <button class="btn border-secondary w-75">Excuse me!</button>
            </div>
        <div>
        <hr class="mt-5"/>
    `;

	feedContainer.appendChild(attendanceDiv);
});
