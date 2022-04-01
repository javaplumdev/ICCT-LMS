const sendMessageButton = document.querySelector('.send-msg');
const textContent = document.getElementById('text-content');
const messagesContainer = document.querySelector('.messages-container');

const date = new Date();

// For converting the 24hrs to 12hrs
const time = date.toLocaleString('en-US', {
	hour: 'numeric',
	minute: 'numeric',
	hour12: true,
});

sendMessageButton.addEventListener('click', function () {
	if (textContent.value === '') {
		alert('Please enter a message');
	} else {
		const messageHolder = document.createElement('div');

		messageHolder.innerHTML = `
        <div class="message-holder bg-primary p-2 text-light m-2">
			<small>${date.getMonth()}/${date.getDate()}/${date.getFullYear()} - ${time}</small>
            <p class="lead p-1">You: ${textContent.value}</p>
        </div>
    `;
		messagesContainer.scrollTop = messagesContainer.scrollHeight;

		messagesContainer.appendChild(messageHolder);

		textContent.value = '';
	}
});
