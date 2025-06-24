const template = `
    <nav>
        <a class="logo" href="#">Action<span>Verse</span></a>
        <div class="mobile-menu" role="button" tabindex="0" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="navList">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-list" id="navList">
            <li><a href="/public/index.html">Início</a></li>
            <li><a href="/src/pages/about.html">Sobre</a></li>
            <li><a href="/src/pages/rarity.html">Raridade</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
        <div class="nav-icon">
            <i class="fa-solid fa-cart-shopping" role="button" tabindex="0" aria-label="Carrinho de compras"></i>
            <i id="login-icon" class="fa-solid fa-user" role="button" tabindex="0" aria-label="Login ou perfil do usuário"></i>
        </div>
    </nav>
`;

export default template;