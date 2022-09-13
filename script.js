const passwordErrorMessage = document.querySelector('.unmatched-pword');
const errColor = document.querySelectorAll('.error');
const pword1 = document.querySelector('#pword');
const pword2 = document.querySelector('#confirm');

console.log(pword1.value, pword2.value);

function matchPwords () {
    if (pword1.value !== pword2.value) {
        return false;
    }

    else if (pword1.value === '' && pword2.value === '') {
        return 'blank';
    }

    else if (pword1.value === pword2.value) {
        return true;
    }
}


function sendErrorMsg () {
    if (matchPwords() === 'blank'){
        passwordErrorMessage.textContent = 'Please enter a valid password';
    }

    else if (matchPwords() == false) {
        passwordErrorMessage.textContent = 'Passwords do not match';
        errColor.forEach(e => e.style.border = '1px solid red');
        errColor.forEach(e => e.style.outline = '1px solid red');
    }

    else {
        passwordErrorMessage.textContent = '';
        errColor.forEach(e => e.style.border = '1px solid green');
        errColor.forEach(e => e.style.outline = '1px solid green');
    }
}

sendErrorMsg(); // Sends the error on load


pword1.addEventListener('keyup', () => {
    sendErrorMsg()
});


pword2.addEventListener('keyup', () => {
    sendErrorMsg()
});
 
