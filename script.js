const passwordErrorMessage = document.querySelector('.unmatched-pword');
const errorInputBorder = document.querySelectorAll('.error');
const pword1 = document.querySelector('#pword');
const pword2 = document.querySelector('#confirm');

console.log(pword1.textContent, pword2.textContent);

function matchPwords () {
    if (pword1.textContent === '' && pword2.textContent === '') {
        return 'blank';
    }

    else if (pword1.textContent === pword2.textContent) {
        return true;
    }

    else if (pword1.textContent !== pword2.textContent) {
        return false;
    }
}


function sendErrorMsg () {
    if (matchPwords() === 'blank'){
        passwordErrorMessage.textContent = 'Please enter a valid password';
    }

    else if (matchPwords() === false) {
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