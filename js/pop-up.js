let login_icon = document.querySelector('button#login-icon');
let login_content = document.querySelector('aside#login-pop-up');

const popUp = () => {
    login_content.innerHTML = `<div id="content">
        <header>
                <h1>Action<span>verse</span></h1>
                <h2>Área de Identificação do Herói</h2>
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
                        <img src="../img/botao_registrar.svg" alt="Enviar formulário">
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
                    <li> Acesso a bonecos raros e exclusivos</li>
                    <li> Coleções temáticas especiais</li>
                    <li> Salve seus favoritos na sua galeria</li>
                    <li> Participe de lançamentos especiais</li>
                </ul>
                <a href="#">Venha para o Actionverse!</a>
            </aside>
        </main>
        <footer>
            <p>&copy Actionverse - Todos os direitos reservados</p>
        </footer>
    </div>`;
}

login_icon.addEventListener('click', popUp);
