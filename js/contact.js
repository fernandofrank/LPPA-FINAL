'use strict';

var submitBtn = null;
var formElements = null;

var sendEmail = function (name, message) {
    window.open('mailto:fer.frank.46@gmail.com?subject=' + 'Contact Form: '
        + encodeURIComponent(name) + '&body=' + encodeURIComponent(message));
}

var validateForm = function () {
    var alphaNum = /^[a-zA-Z0-9]*$/;
    var validEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
    var name = '';
    var message = '';
    var isValid = true;

    for (var i = 0; i < formElements.length; i++) {

        if (formElements[i].id === 'name') {
            if (!alphaNum.test(formElements[i].value)) {
                formElements[i].value = '';
                formElements[i].placeholder = 'Invalid characters';
                isValid = false;
            }
            if (formElements[i].value.length < 3) {
                formElements[i].value = '';
                formElements[i].placeholder = 'Please 3 or more characters';
                isValid = false;
            }
            name = formElements[i].value;
        }

        if (formElements[i].id === 'email') {
            if (!validEmail.test(formElements[i].value)) {
                formElements[i].value = '';
                formElements[i].placeholder = 'Invalid Email format';
                isValid = false;
            }
        }

        if (formElements[i].id === 'message') {
            if (formElements[i].value.length < 15) {
                formElements[i].value = '';
                formElements[i].placeholder = 'Please 15 or more characters';
                isValid = false;
            }
            message = formElements[i].value;
        }

    }
    if (isValid === true)
        sendEmail(name, message)
}

window.onload = function () {
    formElements = document.getElementsByClassName('entry');
    submitBtn = document.getElementById('submit');
    submitBtn.onclick = validateForm;
}