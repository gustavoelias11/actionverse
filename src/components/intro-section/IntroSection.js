'use strict';

import template from './intro-section-template.js';
import styles from './intro-section-styles.js';
import baseStyles from '../base-styles.js';

class IntroSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                ${baseStyles}
                ${styles}
            </style>
            ${template}
        `;
    }
}

customElements.define('intro-section', IntroSection);