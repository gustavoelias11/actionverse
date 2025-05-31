const styles = `
    a {
        color: var(--base-color);
        text-decoration: none;
    }

    .logo {
        font: 400 42px/normal 'Bangers';
        text-shadow: 1px 2px 0px black;
        text-transform: uppercase;
    }

    nav span {
        font: 400 42px/normal 'Bangers';
        color: var(--tertiary-color);
        text-shadow: 1px 2px 0px black;
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: var(--primary-color-light);
        height: 8vh;
    }

    nav li {
        font: 400 25px/normal 'Bangers';
        text-shadow: 1px 2px 0px black;
        border-top: 2px solid white;
        border-left: 2px solid white;
        border-right: 2px solid white;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }

    nav li a:hover {
        color: var(--tertiary-color);
        transition: 0.7s;
    }

    nav li:hover {
        border-color: var(--tertiary-color);
        background: var(--secondary-color-dark);
        transition: 0.7s;
    }

    .nav-list {
        list-style: none;
        display: flex;
    }

    .nav-list li {
        margin-left: 32px;
    }

    .nav-icon {
        color: var(--base-color);
        font-size: 28px;
        list-style: none;
        display: flex;
        cursor: pointer;
    }

    .nav-icon i {
        margin-left: 32px;
    }

    .nav-icon i:hover {
        color: var(--tertiary-color);
        transition: 0.7s;
    }

    .mobile-menu {
        display: none;
        cursor: pointer;
        z-index: 20;
        position: relative;
    }

    .mobile-menu div {
        width: 32px;
        height: 2px;
        background: #fff;
        margin: 8px;
        transition: 0.3s;
    }

    header section {
        background-color: var(--primary-color-dark);
        padding: 20px;
        min-height: 300px;
        position: relative;
    }

    .boom {
        font: 400 42px/normal 'Bangers';
        color: var(--tertiary-color);
        text-shadow: 1px 2px 0px black;
        position: absolute;
        top: 20px;
        left: 30px;
    }

    .wow {
        font: 400 42px/normal 'Bangers';
        color: var(--base-color);
        text-shadow: 1px 2px 0px black;
        position: absolute;
        bottom: 20px;
        right: 30px;
    }

    #principal {
        font: 400 58px/normal 'Bangers';
        margin-top: 35px;
    }

    .p1 {
        color: var(--base-color);
        text-shadow: 1px 2px 0px black;
        text-align: center;
    }

    .p2 {
        color: var(--tertiary-color);
        text-shadow: 1px 2px 0px black;
        text-align: center;
    }

    .s-principal {
        font: 400 25px/normal 'Bangers';
        color: var(--base-color);
        text-shadow: 1px 2px 0px black;
        text-align: center;
        margin-top: 5px;
    }

    @media (max-width: 999px) {
        body {
            overflow-x: hidden;
        }

        nav li a:hover {
            color: var(--base-color);
        }

        nav li:hover {
            background-color: var(--primary-color-dark);
        }

        nav li {
            border: none;
        }

        .nav-list {
            position: absolute;
            top: 0; 
            right: 0;
            width: 50vw;
            height: 100vh;
            background: var(--primary-color-light);
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            transform: translateX(100%);
            transition: transform 0.3s ease-in;
            z-index: 9;
        }
        .nav-list li {
            margin-left: 0;
            opacity: 0;
        }

        .nav-icon {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 32px;
            padding: 20px 0;
            background: var(--primary-color-light);
            transform: translateX(100%);
            transition: transform 0.3s ease-in;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 50vw;
            height: auto;
            z-index: 9;
        }

        .fa-user {
            margin-right: 25px;
        }

        .nav-icon i {
            color: var(--base-color);
            font-size: 25px;
        }

        .mobile-menu {
            display: block;
        }
        }

        .nav-list.active {
            transform: translateX(0);
        }

        .nav-icon.active {
            transform: translateX(0);
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

        .mobile-menu.active .line1 {
            transform: rotate(-45deg) translate(-8px, 8px);
        }

        .mobile-menu.active .line2 {
            opacity: 0;
        }

        .mobile-menu.active .line3 {
            transform: rotate(45deg) translate(-5px, -7px);
        }

        /* RESPONSIVIDADE SECTION */
        @media (max-width: 999px) {
        section  {
            padding: 20px;
            min-height: 200px;
        }

        .boom {
            font-size: 25px;
        }

        .wow {
            font-size: 25px;
        }

        #principal {
            font-size: 38px;
        }

        .s-principal {
            font-size: 15px;
            margin-top: 5px;
        }

        .content {
            margin-bottom: 30px;
        }
    }
`;

export default styles;