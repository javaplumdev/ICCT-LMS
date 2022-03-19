const saveButton = document.querySelector('.save-btn');

const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const date = document.querySelector('.date');
const username = document.querySelector('.username');
const password = document.querySelector('.password');

saveButton.addEventListener('click', function (e) {
	e.preventDefault();

	if (
		firstname.value == '' &&
		lastname.value == '' &&
		email.value == '' &&
		date.value == '' &&
		username.value == '' &&
		password.value == ''
	) {
		alert('Please enter fields');
	} else {
		alert('Changes saved!');
	}
});

const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function () {
	// toggle the type attribute
	const type =
		password.getAttribute('type') === 'password' ? 'text' : 'password';
	password.setAttribute('type', type);

	// toggle the icon
	this.classList.toggle('bi-eye');
});
