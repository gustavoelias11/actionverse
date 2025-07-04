const styles = `
    a {
        color: var(--base);
        text-decoration: none;
    }

    .logo {
        margin-left: -30%;
        font: 400 42px/normal 'Bangers';
        text-shadow: 1px 2px 0px black;
        text-transform: uppercase;
    }

    nav span {
        font: 400 42px/normal 'Bangers';
        color: var(--tertiary);
        text-shadow: 1px 2px 0px black;
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: var(--primary-light);
        height: 8vh;
        position: relative;
    }

    nav li {
        font: 400 25px/normal 'Bangers';
        text-shadow: 1px 2px 0px black;
        border-top: 2px solid white;
        border-left: 2px solid white;
        border-right: 2px solid white;
        border-radius: 5px;
        padding: 5px;
    }

    nav li a:hover {
        color: var(--tertiary);
        transition: 0.7s;
    }

    nav li:hover {
        border-color: var(--tertiary);
        background: var(--secondary-dark);
        transition: 0.7s;
    }

    .nav-list {
        list-style: none;
        display: flex;
        position: absolute;
    }

    .nav-list li {
        margin-left: 32px;
    }

    .nav-icon {
        margin-right: -30%;
        color: var(--base);
        font-size: 28px;
        list-style: none;
        display: flex;
        align-items: center;
    }
    
    .nav-icon > * {
        margin-left: 32px;
        cursor: pointer;
    }

    .nav-icon a {
        text-decoration: none;
        color: inherit;
    }

    .nav-icon > *:hover {
        color: var(--tertiary);
        transition: 0.7s;
    }

    .mobile-menu {
        display: none;
        cursor: pointer;
        z-index: 1001;
    }

    .mobile-menu div {
        width: 32px;
        height: 2px;
        background: #fff;
        margin: 8px;
        transition: 0.3s;
    }

    @media (max-width: 999px) {
        body.body-no-scroll {
            overflow-x: hidden;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px;
            height: 8vh;
            width: 100%;
            position: relative;
            background: var(--primary-light);
        }

        .logo {
            margin: 0;
        }

        .mobile-menu {
            display: block;
            z-index: 1001;
            margin: 0;
        }

        .nav-list {
            position: fixed;
            top: 0;
            right: 0;
            width: 60vw;
            height: 100vh;
            background: var(--primary-light);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        }

        .nav-list.active {
            transform: translateX(0);
        }

        .nav-list li {
            margin-left: 0;
            margin-bottom: 30px;
            opacity: 0;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            width: 80%;
            text-align: center;
        }

        nav li a:hover {
            color: var(--tertiary);
            transition: 0.3s;
        }

        nav li:hover {
            background-color: var(--primary-dark);
            border-color: transparent;
            transition: 0.3s;
        }

        .nav-icon {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 60vw;
            margin: 0;
            padding: 20px 0;
            border-top: 1px solid var(--primary-dark);
            background: var(--primary-light);
            z-index: 1000;
            display: flex;
            justify-content: center;
            gap: 32px;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        }

        .nav-icon.active {
            transform: translateX(0);
        }
        
        .nav-icon > * {
            opacity: 0;
            font-size: 25px;
            margin-left: 0;
        }

        .nav-list.active li, .nav-icon.active > * {
            animation: navLinkFade 0.5s ease forwards;
        }
        
        .nav-list.active li:nth-child(1) { animation-delay: 0.2s; }
        .nav-list.active li:nth-child(2) { animation-delay: 0.3s; }
        .nav-list.active li:nth-child(3) { animation-delay: 0.4s; }
        .nav-list.active li:nth-child(4) { animation-delay: 0.5s; }
        .nav-icon.active > a { animation-delay: 0.6s; }
        .nav-icon.active > i { animation-delay: 0.7s; }

        .mobile-menu.active .line1 {
            transform: rotate(-45deg) translate(-8px, 8px);
        }
        .mobile-menu.active .line2 {
            opacity: 0;
        }
        .mobile-menu.active .line3 {
            transform: rotate(45deg) translate(-5px, -7px);
        }
    }

    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export default styles;