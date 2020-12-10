function emailValidate(email) {
  if(email.includes('@')) {
    return true;
  }
  else {
    return false;
  }
}

function validateNSFW(message) {
	if(message.includes('crap')) {
		return true;
	}
	else {
		return false;

	}
}


function clickListener(event) {
  event.preventDefault();
  let emailInput = document.querySelector('#email');
  let messageInput = document.querySelector('#message');

  let emailText = emailInput.value;
  let messageText = messageInput.value;

  if(emailValidate(emailText) !== true) {
    console.log('The email address must contain @');
    return false;
  }

  if(validateNSFW(messageText) !== true) {
  	console.log('The text is safe for work');
  	return false;
  }
  console.log('Thanks for your message');
}


let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', clickListener);

