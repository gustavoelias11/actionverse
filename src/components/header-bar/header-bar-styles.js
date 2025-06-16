const styles = `
    a {
        color: var(--base-color);
        text-decoration: none;
    }

    .logo {
        margin-left: -30%;
        font: 400 42px/normal 'Bangers';
        text-shadow: 1px 2px 0px black;
        text-transform: uppercase;
    }

    nav span { /* Estilo para o 'Verse' no logo */
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
        position: fixed;
    }

    .nav-list li {
        margin-left: 32px;
    }

    .nav-icon {
        margin-right: -30%;
        color: var(--base-color);
        font-size: 28px;
        list-style: none;
        display: flex;
    }
    
    .nav-icon i {
        margin-left: 32px;
        cursor: pointer;
    }

    .nav-icon i:hover {
        color: var(--tertiary-color);
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

    header section {
        background-color: var(--primary-color-dark);
        padding: 20px;
        min-height: 300px;
        position: relative;
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        text-align: center;
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

    .main-title {
        font: 400 58px/normal 'Bangers';
        text-shadow: 1px 2px 0px black; 
        margin-top: 10px; 
    }
    
    .main-title.p1 { 
        color: var(--base-color);
    }
    
    .main-title.p2 { 
        color: var(--tertiary-color);
    }
    
    .main-title.p2 span { 
    
    }

    .s-principal {
        font: 400 25px/normal 'Bangers';
        color: var(--base-color);
        text-shadow: 1px 2px 0px black;
        margin-top: 15px;
    }

    @media (max-width: 999px) {
        body {
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
            background: var(--primary-color-light);
        }

        .logo {
            margin: 0;
        }

        .mobile-menu {
            display: block;
            display: fixed;
            z-index: 1001;
            margin: 0;
        }

        .nav-list {
            position: fixed;
            top: 0;
            right: 0;
            width: 60vw;
            height: 100vh;
            background: var(--primary-color-light);
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
            color: var(--tertiary-color);
            transition: 0.3s;
        }

        nav li:hover {
            background-color: var(--primary-color-dark);
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
            border-top: 1px solid var(--primary-color-dark);
            background: var(--primary-color-light);
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
        
        .nav-icon i {
            opacity: 0;
            color: var(--base-color);
            font-size: 25px;
            margin-left: 0;
        }

        .nav-list.active li, .nav-icon.active i {
            animation: navLinkFade 0.5s ease forwards;
        }
        
        .nav-list.active li:nth-child(1) { animation-delay: 0.2s; }
        .nav-list.active li:nth-child(2) { animation-delay: 0.3s; }
        .nav-list.active li:nth-child(3) { animation-delay: 0.4s; }
        .nav-list.active li:nth-child(4) { animation-delay: 0.5s; }
        .nav-icon.active i:nth-child(1) { animation-delay: 0.6s; }
        .nav-icon.active i:nth-child(2) { animation-delay: 0.7s; }

        .mobile-menu.active .line1 {
            transform: rotate(-45deg) translate(-8px, 8px);
        }
        .mobile-menu.active .line2 {
            opacity: 0;
        }
        .mobile-menu.active .line3 {
            transform: rotate(45deg) translate(-5px, -7px);
        }
        
        .nav-icon.active { 
        transform: translateX(0);
        }

        header section { 
            padding: 20px;
            min-height: 200px;
        }
        .boom, .wow {
            font-size: 25px;
        }
        .main-title { 
            font-size: 38px;
        }
        .s-principal {
            font-size: 15px;
            margin-top: 5px; 
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

    @media (max-width: 999px) {
        header section { 
            padding: 20px;
            min-height: 200px;
        }

        .boom, .wow {
            font-size: 25px;
        }

        .main-title { 
            font-size: 38px;
        }

        .s-principal {
            font-size: 15px;
            margin-top: 5px; 
        }
    }
`;

export default styles;