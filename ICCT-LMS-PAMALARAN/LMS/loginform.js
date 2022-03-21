const loginButton = document.getElementById('loginButton');
const username = document.getElementById('username');
const password = document.getElementById('password');

const checkLabel = document.getElementById('checkbox-checked');

function checkInputs() {
	if (username.value == '' && password.value == '') {
		alert('Please enter both fields');
	} else if (username.value == '') {
		alert('Please enter username');
	} else if (password.value == '') {
		alert('Please enter password');
	} else {
		alert('Welcome!');
	}
}

loginButton.addEventListener('click', function (e) {
	e.preventDefault();
	checkInputs();

	if (checkLabel.checked) {
		username.value == username.value;
		password.value = password.value;
	} else {
		username.value = '';
		password.value = '';
	}
});
