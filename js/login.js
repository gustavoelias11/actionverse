'use strict';

let sign_in_button = document.querySelector('button#sign_in');
let sign_up_button = document.querySelector('button#sign_up');

const switchScreen = evt => {
    if(evt.target.id === 'sign_in') {
        sign_in_button.classList.add('active_button');
        sign_in_button.style.marginLeft = '2.96px';
        sign_up_button.classList.remove('active_button');
        sign_up_button.style.marginRight = 'auto';
    } else {
        sign_up_button.classList.add('active_button');
        sign_up_button.style.marginRight = '2.96px';
        sign_in_button.classList.remove('active_button');
        sign_in_button.style.marginLeft = 'auto';
    }
}

sign_in_button.addEventListener('click', switchScreen);
sign_up_button.addEventListener('click', switchScreen);
