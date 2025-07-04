const template = `
    <nav>
        <a class="logo" href="#">Action<span>Verse</span></a>
        <div class="mobile-menu" role="button" tabindex="0" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="navList">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-list" id="navList">
            <li><a href="./index.html">Início</a></li>
            <li><a href="./rarity.html">Raridade</a></li>
            <li><a href="./about.html">Sobre</a></li>
        </ul>
        <div class="nav-icon">
            <a href="./cart.html" aria-label="Carrinho de compras">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <i id="login-icon" class="fa-solid fa-user" role="button" tabindex="0" aria-label="Login ou perfil do usuário"></i>
        </div>
    </nav>
`;

export default template;