const styles = `
    @import url("/css/style.css");
    footer {
        color: var(--base-color);
        font: 400 20px/normal 'Bangers';
        text-shadow: 1px 2px 0px black;
        width: 100%;
        background: var(--primary-color-light);
    }

    #content {
        background: var(--primary-color-light);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15rem;
        padding: 3rem 3.5rem;

        max-width: 1200px;     /* ou o valor que achar ideal */
    margin: 0 auto; 
    }

    #footer-contacts h1 {
        font-size: 35px;
        margin-bottom: 0.75rem;
    }

    #footer-contacts p {
        font-family: 'Inter';
    }

    #footer-contacts span {
        color: var(--tertiary-color);
        text-shadow: 1px 2px 0px black;
    }

    #social-media {
        display: flex;
        gap: 2rem;
        font-size: 1.5rem;
        margin-top: 1.5rem;
    }

    #social-media .footer-link {
        height: 2.5rem;
        width: 2.5rem;
        color: var(--base-color);
    }

    #social-media .footer-link:hover {
        color: var(--tertiary-color);
        transition: 0.7s;
    }

    .footer-list h3 {
        font-size: 35px;
    }

    .footer-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .footer-list li {
        font-family: 'Inter';
    }

    .footer-list li:hover {
        color: var(--tertiary-color);
        transition: 0.7s;
    }

    #copyright {
        display: flex;
        justify-content: center;
        background-color: var(--primary-color-light);
        font-size: 0.9rem;
        padding: 1.5rem;
        font-weight: 100;
    }

    @media (max-width: 999px) {
        #content {
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
        }
    }
`;

export default styles;
