// header.js

class MobileNavbar {
    constructor(mobileMenuElement, navListElement, navLinksNodeList, navIconsContainerElement) {
        this.mobileMenu = mobileMenuElement;
        this.navList = navListElement;
        this.navLinks = navLinksNodeList; // Usado para animar os links
        this.navIconsContainer = navIconsContainerElement; // O container .nav-icon
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation
                ? ""
                : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    }

    handleClick() {
        // Verifica se o menu está ativo ANTES de alternar a classe
        const isCurrentlyActive = this.navList.classList.contains(this.activeClass);

        this.navList.classList.toggle(this.activeClass);
        // Garante que o container de ícones também seja alternado se ele existir
        if (this.navIconsContainer) {
            this.navIconsContainer.classList.toggle(this.activeClass);
        }
        this.mobileMenu.classList.toggle(this.activeClass);
        
        // Atualiza aria-expanded para o estado OPOSTO ao que estava
        this.mobileMenu.setAttribute('aria-expanded', !isCurrentlyActive);

        this.animateLinks();
    }

    addClickEvent() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        } else {
            console.error("MobileNavbar: Elemento .mobile-menu não encontrado para adicionar evento de clique.");
        }
    }

    init() {
        // Verifica apenas os elementos essenciais para o clique e a lógica principal
        if (this.mobileMenu && this.navList) {
            this.addClickEvent();
            // Define o estado inicial do aria-expanded baseado na classe 'active'
            const isInitiallyActive = this.navList.classList.contains(this.activeClass);
            this.mobileMenu.setAttribute('aria-expanded', isInitiallyActive);
        } else {
            console.error("MobileNavbar não pôde ser inicializado: elementos essenciais (mobileMenu ou navList) estão faltando.");
        }
        return this;
    }
}

function initializeMobileMenu() {
    const headerBar = document.querySelector('header-bar');

    if (headerBar && headerBar.shadowRoot) {
        const shadow = headerBar.shadowRoot;

        const mobileMenuEl = shadow.querySelector(".mobile-menu");
        const navListEl = shadow.querySelector(".nav-list");
        // Mesmo que navLinksNodeList ou navIconsContainerEl não sejam essenciais para o clique,
        // é bom passá-los se existirem, para a animação e a lógica de toggle.
        const navLinksNodeList = shadow.querySelectorAll(".nav-list li, .nav-icon > i");
        const navIconsContainerEl = shadow.querySelector(".nav-icon");

        if (mobileMenuEl && navListEl) { // Checa os elementos mais críticos para o menu funcionar
            const mobileNavbarInstance = new MobileNavbar(
                mobileMenuEl,
                navListEl,
                navLinksNodeList, // Pode ser uma NodeList vazia
                navIconsContainerEl // Pode ser null se não encontrado
            );
            mobileNavbarInstance.init();
        } else {
            // console.warn("Elementos do menu (mobileMenu ou navList) ainda não prontos no shadowRoot. Tentando novamente...");
            setTimeout(initializeMobileMenu, 100);
        }
    } else {
        // console.warn("header-bar ou seu shadowRoot não encontrado. Tentando novamente...");
        setTimeout(initializeMobileMenu, 100);
    }
}

// Adiciona um listener para quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMobileMenu);
} else {
    // O DOM já está carregado, tenta inicializar.
    initializeMobileMenu();
}