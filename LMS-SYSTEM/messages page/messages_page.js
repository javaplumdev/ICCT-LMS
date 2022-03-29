const sendMessageButton = document.querySelector('.send-msg');
const textContent = document.getElementById('text-content');
const messagesContainer = document.querySelector('.messages-container');

sendMessageButton.addEventListener('click', function () {
	if (textContent.value === '') {
		alert('Please enter a message');
	} else {
		console.log('sent!');
		console.log(textContent.value);

		const messageHolder = document.createElement('div');

		messageHolder.innerHTML = `
        <div class="bg-primary p-2 rounded text-light m-3">
            <p class="lead">You: ${textContent.value}</p>
        </div>
    `;

		messagesContainer.appendChild(messageHolder);

		// textContent.value = '';
	}
});
