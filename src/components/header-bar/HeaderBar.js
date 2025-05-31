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

customElements.define('header-bar', HeaderBar);