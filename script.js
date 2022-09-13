const passwordErrorMessage = document.querySelector('.unmatched-pword');
const errorInputBorder = document.querySelectorAll('.error');
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
    }

    else {
        passwordErrorMessage.textContent = '';
    }
}

sendErrorMsg();
matchPwords();


pword1.addEventListener('focus', () => {
    sendErrorMsg()
});

pword2.addEventListener('focus', () => {
    sendErrorMsg()
});
