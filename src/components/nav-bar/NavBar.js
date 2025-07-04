import template from './nav-bar-template.js';
import styles from './nav-bar-styles.js';
import baseStyles from '../base-styles.js';

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
            <style>
                ${baseStyles}
                ${styles}
            </style>
            ${template}
        `;
    }

    connectedCallback() {
        this.initializeMobileMenu();
    }

    initializeMobileMenu() {
        const mobileMenuEl = this.shadowRoot.querySelector(".mobile-menu");
        const navListEl = this.shadowRoot.querySelector(".nav-list");
        const navLinksNodeList = this.shadowRoot.querySelectorAll(".nav-list li, .nav-icon > *");
        const navIconsContainerEl = this.shadowRoot.querySelector(".nav-icon");
        
        if (mobileMenuEl && navListEl) {
            const mobileNavbarInstance = new MobileNavbar(
                mobileMenuEl,
                navListEl,
                navLinksNodeList,
                navIconsContainerEl
            );
            mobileNavbarInstance.init();
        }
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
        document.body.classList.toggle('body-no-scroll');
        this.mobileMenu.setAttribute('aria-expanded', !isCurrentlyActive);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu && this.navList) {
            this.addClickEvent();
            const isInitiallyActive = this.navList.classList.contains(this.activeClass);
            this.mobileMenu.setAttribute('aria-expanded', isInitiallyActive);
        }
        return this;
    }
}

customElements.define('nav-bar', NavBar);