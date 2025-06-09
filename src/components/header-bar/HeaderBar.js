import template from './header-bar-template.js';
import styles from './header-bar-styles.js';
import baseStyles from '../base-styles.js'

class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow(({mode: 'open'}));
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
            <style>
                ${baseStyles}
                ${styles}
            </style>
            ${template}
        `;
    }
}

class MobileNavbar {
    constructor(mobileMenuElement, navListElement, navLinksNodeList, navIconsContainerElement) {
        this.mobileMenu = mobileMenuElement;
        this.navList = navListElement;
        this.navLinks = navLinksNodeList;
        this.navIconsContainer = navIconsContainerElement;
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
        const isCurrentlyActive = this.navList.classList.contains(this.activeClass);

        this.navList.classList.toggle(this.activeClass);
        
        if (this.navIconsContainer) {
            this.navIconsContainer.classList.toggle(this.activeClass);
        }
        this.mobileMenu.classList.toggle(this.activeClass);
        
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
        if (this.mobileMenu && this.navList) {
            this.addClickEvent();
            
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
        const navLinksNodeList = shadow.querySelectorAll(".nav-list li, .nav-icon > i");
        const navIconsContainerEl = shadow.querySelector(".nav-icon");

        if (mobileMenuEl && navListEl) {
            const mobileNavbarInstance = new MobileNavbar(
                mobileMenuEl,
                navListEl,
                navLinksNodeList,
                navIconsContainerEl
            );
            mobileNavbarInstance.init();
        } else {
            setTimeout(initializeMobileMenu, 100);
        }
    } else {
        setTimeout(initializeMobileMenu, 100);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMobileMenu);
} else {
    initializeMobileMenu();
}

customElements.define('header-bar', HeaderBar);
