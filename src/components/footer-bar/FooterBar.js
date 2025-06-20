import template from './footer-bar-template.js';
import styles from './footer-bar-styles.js';
import baseStyles from '../base-styles.js';

class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                ${baseStyles}
                ${styles}
            </style>
            ${template}
        `;
    }
}

customElements.define('footer-bar', FooterBar);
