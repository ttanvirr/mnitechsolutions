const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const address = document.getElementById('address');
const service = document.getElementById('service');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const userMessage = document.getElementById('user-message');


const selectFields = document.querySelectorAll(".select");

selectFields.forEach(selectField => {
    const optionGroup = selectField.nextElementSibling; 
    const options = optionGroup.children;
    
    [...options].forEach(option => {
        option.addEventListener("mousedown", (e) => {    // 'CLICK' EVENT WON'T WORK
            selectField.value = option.textContent;
            // Validation for selecting an option
            const serviceMessage = document.querySelector('.service-message');
            validMessage(serviceMessage);
        });
    });  
    
});

// FORM VALIDATION
// form.addEventListener('submit', onSubmit);
firstName.addEventListener('keyup', firstNameValidation);
address.addEventListener('keyup', addressValidation);
service.addEventListener('keyup', serviceValidation);
email.addEventListener('keyup', emailValidation);
// phone.addEventListener('keydown', phoneValidation);
// userMessage.addEventListener('keydown', phoneValidation);


// Functions
function initialValidation(formControl) {
    formControl.closest('.form-group').classList.add('error');
    formControl.closest('.form-group').classList.remove('success');
}

function validMessage(messageCont) {
    messageCont.innerText = 'Valid';
    messageCont.closest('.form-group').classList.add('success');
    messageCont.closest('.form-group').classList.remove('error');
    return true;
}

function firstNameValidation() {
    const firstNameMessage = document.querySelector('.fname-message');

    initialValidation(firstName);

    if(firstName.value.trim().length == 0) {
        firstNameMessage.innerText = 'This field can\'t be empty';
        return false;
    } 
 
    if(!firstName.value.match(/^[a-zA-Z]+$/) ) {
        firstNameMessage.innerText = 'Only letters are allowed';
        return false;
    } 
    if(firstName.value.match(/[a-zA-Z]/) ) {
        if (firstName.value.length < 3) {
            firstNameMessage.innerText = 'At least 3 letters required';
            return false;
        } 
        else {
            validMessage(firstNameMessage);
        }
    }
}

function addressValidation() {
    const addressMessage = document.querySelector('.address-message');

    initialValidation(address);

    if(address.value.trim().length == 0) {
        addressMessage.innerText = 'This field can\'t be empty';
        return false;
    } 
    if(address.value.length < 2 || !address.value.match(/[a-zA-Z]{2,}/) ) {
        addressMessage.innerText = 'At least 2 letters required';
        return false;
    } else {
        validMessage(addressMessage);
    }
}

function serviceValidation() {
    const serviceMessage = document.querySelector('.service-message');

    initialValidation(service);

    if(service.value.trim().length == 0) {
        serviceMessage.innerText = 'This field can\'t be empty';
        return false;
    } 
    if(service.value.length < 2 || !service.value.match(/[a-zA-Z]{2,}/) ) {
        serviceMessage.innerText = 'At least 2 letters required';
        return false;
    } else {
        validMessage(serviceMessage);
    }
}

function emailValidation() {
    const emailMessage = document.querySelector('.email-message');

    initialValidation(email);

    if(email.value.trim().length == 0) {
        emailMessage.innerText = 'This field can\'t be empty';
        return false;
    } 
    if(!email.value.match(/^[\w\.+-]+@([\w-]+\.)+[a-zA-Z]{2,4}$/) ) {
        emailMessage.innerText = 'Invalid email format';
        return false;
    } 
    else {
        validMessage(emailMessage);
    }
}
