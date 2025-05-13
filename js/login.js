'use strict';

let sign_in_button = document.querySelector('button#sign-in');
let sign_up_button = document.querySelector('button#sign-up');
let name_label = document.querySelector('label#name-label');
let password_label = document.querySelector('label#password-label');
let check_password_field = document.querySelector('div#check-password-field');

const switchScreen = evt => {
    if(evt.target.id === 'sign-in') {
        sign_in_button.classList.add('active-button');
        sign_in_button.style.marginLeft = '2.96px';

        sign_up_button.classList.remove('active-button');
        sign_up_button.style.marginRight = 'auto';

        name_label.innerText = 'Nome do Herói';
        password_label.innerText = 'Senha Secreta';

        check_password_field.style.display = 'none';
    } else {
        sign_up_button.classList.add('active-button');
        sign_up_button.style.marginRight = '2.96px';

        sign_in_button.classList.remove('active-button');
        sign_in_button.style.marginLeft = 'auto';

        name_label.innerText = 'Escolha seu Codinome';
        password_label.innerText = 'Crie sua Senha';

        check_password_field.style.display = 'block';
    }
}

sign_in_button.addEventListener('click', switchScreen);
sign_up_button.addEventListener('click', switchScreen);
