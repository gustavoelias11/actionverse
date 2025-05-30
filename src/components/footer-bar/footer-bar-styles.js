const styles = `
    footer {
    color: var(--base-color);
    font: 400 20px/normal 'Bangers';
    text-shadow: 1px 2px 0px black;
    width: 100%;
    background: var(--primary-color-light); /* Matches #content background, can be on footer */
    }

    .footer-main-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15rem;
        padding: 3rem 3.5rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .footer-brand-social h1 {
        font-size: 35px;
        margin-bottom: 0.75rem;
    }

    .footer-brand-social p {
        font-family: 'Inter';
        font-size: 16px;
    }

    .footer-brand-social h1 span {
        color: var(--tertiary-color);
        text-shadow: 1px 2px 0px black;
    }

    .footer-social-links {
        display: flex;
        gap: 2rem;
        font-size: 1.5rem;
        margin-top: 1.5rem;
    }

    .footer-social-links .footer-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 2.5rem;
        color: var(--base-color);
    }

    .footer-social-links .footer-link:hover {
        color: var(--tertiary-color);
        transition: color 0.7s;
    }

    .footer-nav-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .footer-nav-list h3 {
        font-size: 35px;
        margin-bottom: 0.75rem;
    }

    .footer-nav-list li a {
        font-family: 'Inter';
        font-size: 16px;
        text-decoration: none;
        color: var(--base-color);
    }

    .footer-nav-list li a:hover {
        color: var(--tertiary-color);
        transition: color 0.7s;
    }

    .footer-legal {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        padding: 1.5rem;
        font-weight: 100;
        font-family: 'Inter';
        text-shadow: none;
    }

    @media (max-width: 999px) {
        .footer-main-content {
            grid-template-columns: repeat(1, 1fr);
            gap: 3rem;
            padding: 2rem 1.5rem;
        }

        .footer-brand-social,
        .footer-nav-list {
            text-align: center;
        }

        .footer-social-links {
            justify-content: center;
        }

        .footer-nav-list h3 {
            font-size: 28px;
        }
    }
`;

export default styles;
