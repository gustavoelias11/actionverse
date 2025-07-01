const styles = `
    section {
        background-color: var(--primary-dark);
        padding: 20px;
        min-height: 300px;
        position: relative;
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        text-align: center;
        overflow: hidden;
    }

    .boom {
        font: 400 42px/normal 'Bangers';
        color: var(--tertiary);
        text-shadow: 1px 2px 0px black;
        position: absolute;
        top: 5px;
        left: 20px;
    }

    .wow {
        font: 400 42px/normal 'Bangers';
        color: var(--base);
        text-shadow: 1px 2px 0px black;
        position: absolute;
        bottom: 5px;
        right: 20px;
    }

    .main-title {
        font: 400 58px/normal 'Bangers';
        text-shadow: 1px 2px 0px black; 
        margin-top: 10px;
        line-height: 1;
    }
    
    .main-title.p1 { 
        color: var(--base);
    }
    
    .main-title.p2 { 
        color: var(--tertiary);
    }

    .s-principal {
        font: 400 25px/normal 'Bangers';
        color: var(--base);
        text-shadow: 1px 2px 0px black;
        margin-top: 15px;
    }

    @media (max-width: 999px) {
        section { 
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

    /* Animações */
    @keyframes slideFromTop {
        0% {
            opacity: 0;
            transform: translateY(-50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideFromBottom {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeInOnly {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .from-top {
        animation: slideFromTop 0.8s ease-out forwards;
        animation-delay: 0.2s;
        opacity: 0;
    }

    .from-bottom {
        animation: slideFromBottom 0.8s ease-out forwards;
        animation-delay: 0.6s;
        opacity: 0;
    }

    .delay-1 {
        animation: fadeInOnly 0.5s ease-out forwards;
        animation-delay: 0.7s;
        opacity: 0;
    }

    .delay-2 {
        animation: fadeInOnly 0.5s ease-out forwards;
        animation-delay: 0.9s;
        opacity: 0;
    }
`;

export default styles;
