import template from './footer-bar-template.js';
import styles from './footer-bar-styles.js';

class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `<style>${styles}</style>${template}`;
    }
}

customElements.define('footer-bar', FooterBar);
