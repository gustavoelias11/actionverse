'use strict';

import styles from './header-bar-styles.js';
import baseStyles from '../base-styles.js';

class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                ${baseStyles}
                ${styles}
            </style>
            <header>
                <slot></slot> </header>
        `;
    }
}

customElements.define('header-bar', HeaderBar);