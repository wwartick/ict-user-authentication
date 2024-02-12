const fakeCheckbox = document.querySelector('.checkbox');
const continueBtn = document.querySelector('.continue-btn')

const checkTheBox = function(e) {
    const target = e.target;
    if( target.textContent !== '✓'){
        target.textContent = '✓'
        fakeCheckbox.style.backgroundColor = '#d39bda'
    } else {
        target.textContent= '';
    }  
}

const newMember = function(name) {
    const userNameDiv = document.querySelector('.name-input-container');
    const tosDiv = document.querySelector('.tos-container');

    userNameDiv.textContent='';
    tosDiv.textContent='';

    const allRiseSpan = document.createElement('span');
    const nameSpan = document.createElement('span')
    allRiseSpan.classList.add('welcome');
    nameSpan.classList.add('welcome');
    allRiseSpan.textContent= `ALL RISE FOR`;
    nameSpan.textContent = name;
    continueBtn.style.marginTop = '-1.5em';

    userNameDiv.appendChild(allRiseSpan);
    userNameDiv.appendChild(nameSpan);

    continueBtn.textContent ='Go Back';

}

const buttonHandler = function(e){

    if(continueBtn.textContent === 'Go Back') {
        location.reload();
    }

    const inputField = document.querySelector('#username-input');

    if(inputField.value === '') {
        inputField.style.backgroundColor = 'rgb(219, 48, 48)';
        inputField.placeholder = 'This field is REQUIRED'
        return false;
    } else{
        inputField.style.backgroundColor = '#d39bdab2'
    }

    if(fakeCheckbox.textContent !== '✓') {
        fakeCheckbox.style.backgroundColor = 'rgb(219, 48, 48)'; 
        fakeCheckbox.textContent ='!'
        return false;
    }

    newMember(inputField.value);

}

fakeCheckbox.addEventListener('click', checkTheBox);
continueBtn.addEventListener('click', buttonHandler);