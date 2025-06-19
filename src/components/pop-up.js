'use sctric';

const login_icon = document.querySelector('i#login-icon');
const login_content = document.querySelector('aside#login-pop-up');

const popUp = () => {
    login_content.innerHTML = `<div id="pop-up-content">
        <header>
            <div>
                <h1>Action<span>verse</span></h1>
                <h2>Área de Identificação do Herói</h2>
            </div>
            <button type="button" title="Fechar tela de login" id="close-pop-up">X</button>
        </header>
        <main>
            <section>
                <div id="sign-buttons">
                    <button id="sign-in" class="active-button" type="button">Entrar</button>
                    <button id="sign-up" type="button">Cadastrar</button>
                </div>
                <form action="#" method="post">
                    <div id="name-field">
                        <label for="name" id="name-label">Nome do herói</label>
                        <input type="text" name="name" id="name">
                    </div>
                    <div id="password-field">
                        <label for="password" id="password-label">Senha secreta</label>
                        <input type="password" name="password" id="password">
                    </div>
                    <div id="check-password-field">
                        <label for="check-password">Confirme sua senha</label>
                        <input type="password" name="check-password" id="check-password">
                    </div>
                    <button type="submit" title="Enviar formulário">
                        <img src="/public/img/botao-registrar.svg" alt="Enviar formulário">
                    </button>
                </form>
            </section>
            <aside>
                <div id="circle">
                    <span>Actionverse</span>
                </div>
                <h3>Torne-se um Colecionador</h3>
                <p>Junte-se à Liga dos Colecionadores de bonecos e tenha acesso a conteúdos exclusivos e colecionáveis raros!</p>
                <ul>
                    <li>Acesso a bonecos raros e exclusivos</li>
                    <li>Coleções temáticas especiais</li>
                    <li>Salve seus favoritos na sua galeria</li>
                    <li>Participe de lançamentos especiais</li>
                </ul>
                <a href="#">Venha para o Actionverse!</a>
            </aside>
        </main>
        <footer>
            <p>&copy Actionverse - Todos os direitos reservados</p>
        </footer>
    </div>`;

    login_content.classList.add('activated');


    const close_pop_up_button = document.querySelector('button#close-pop-up');
    close_pop_up_button.addEventListener('click', closePopUp);


    const sign_in_button = document.querySelector('button#sign-in');
    const sign_up_button = document.querySelector('button#sign-up');
    const name_label = document.querySelector('label#name-label');
    const password_label = document.querySelector('label#password-label');
    const check_password_field = document.querySelector('div#check-password-field');

    const switchScreen = evt => {
        if (evt.target.id === 'sign-in') {
            sign_in_button.classList.add('active-button');
            sign_in_button.style.marginLeft = '2.96px';

            sign_up_button.classList.remove('active-button');
            sign_up_button.style.marginRight = 'auto';

            name_label.innerText = 'Nome do Herói';
            password_label.innerText = 'Senha Secreta';

            check_password_field.style.visibility = 'hidden';
        } else {
            sign_up_button.classList.add('active-button');
            sign_up_button.style.marginRight = '2.96px';

            sign_in_button.classList.remove('active-button');
            sign_in_button.style.marginLeft = 'auto';

            name_label.innerText = 'Escolha seu Codinome';
            password_label.innerText = 'Crie sua Senha';

            check_password_field.style.visibility = 'visible';
        }
    };

    sign_in_button.addEventListener('click', switchScreen);
    sign_up_button.addEventListener('click', switchScreen);
};

const closePopUp = () => {
    login_content.innerHTML = '';
    login_content.classList.remove('activated');
};

window.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('nav-bar');
    if (!navBar) return;

    setTimeout(() => {
        const shadow = navBar.shadowRoot;
        if (!shadow) return;
        const login_icon = shadow.querySelector('i#login-icon');
        if (!login_icon) return;

        login_icon.addEventListener('click', popUp);
    }, 0);
});
