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
        top: 20px;
        left: 30px;
    }

    .wow {
        font: 400 42px/normal 'Bangers';
        color: var(--base);
        text-shadow: 1px 2px 0px black;
        position: absolute;
        bottom: 20px;
        right: 30px;
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
`;

export default styles;