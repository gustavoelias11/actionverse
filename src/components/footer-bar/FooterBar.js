import template from '/src/components/footer-bar/footer-bar-template.js';
import styles from '/src/components/footer-bar/footer-bar-styles.js';

class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `<style>${styles}</style>${template}`;
    }
}

customElements.define('footer-bar', FooterBar);
