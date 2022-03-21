const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const number = document.getElementById('number');

const createAccButton = document.getElementById('createAccButton');

function checkInputs() {
	if (
		username.value == '' ||
		password.value == '' ||
		email.value == '' ||
		number.value == ''
	) {
		alert('Please enter missing fields');
	} else if (username.value == '') {
		alert('Please enter username');
	} else if (password.value == '') {
		alert('Please enter password');
	} else if (email.value == '') {
		alert('Please enter email');
	} else if (number.value == '') {
		alert('Please enter number');
	} else {
		alert('Account created!');
	}
}

createAccButton.addEventListener('click', function (e) {
	e.preventDefault();
	checkInputs();
});
