'use strict';

let sign_in_button = document.querySelector('button#sign_in');
let sign_up_button = document.querySelector('button#sign_up');
let check_password_field = document.querySelector('div#check_password_field');

const switchScreen = evt => {
    if(evt.target.id === 'sign_in') {
        sign_in_button.classList.add('active_button');
        sign_in_button.style.marginLeft = '2.96px';
        sign_up_button.classList.remove('active_button');
        sign_up_button.style.marginRight = 'auto';

        check_password_field.style.display = 'none';
    } else {
        sign_up_button.classList.add('active_button');
        sign_up_button.style.marginRight = '2.96px';
        sign_in_button.classList.remove('active_button');
        sign_in_button.style.marginLeft = 'auto';

        check_password_field.style.display = 'block';
    }
}

sign_in_button.addEventListener('click', switchScreen);
sign_up_button.addEventListener('click', switchScreen);
