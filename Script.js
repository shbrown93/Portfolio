function emailValidate(email) {
  if(email.includes('@')) {
    return true;
  }
  else {
    return false;
  }
}

function validateNSFW(message) {
  if(message.includes('Fuck', 'Ass', 'Cunt')){
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
  console.log('I promise we will not send you spam');
  
  if(validateNSFW(messageText) !== false) {
  console.log('Clean your FUCKING mouth out!! Yikes!');
  return true;
 }
  console.log('Thanks for your message')
}

let submitButton = document.querySelector('#submitButton'); 
submitButton.addEventListener('click', clickListener);