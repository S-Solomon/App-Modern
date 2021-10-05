import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


    :root {
        --primary-color: #1F3E76;
        --secondary-color: #25CB9E;
        --border-color: rgb(232, 229, 229);

        --subtitle-color: #244886;
        --heading-color: #0F2137;
        --text-color: #343D48;
        --muted-color: #7b8188;
    }

    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: white;
        font-family: 'DM Sans', sans-serif;
    }

    p {
        line-height: 1.85;
        font-weight: 400;
        font-size: 0.9rem;
        font-family: inherit;
    }

    /* CUSTOM CSS CLASSNAMES */
    .primary-title {
        line-height: 1.3;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--heading-color);
        letter-spacing: -0.5px;
    }

    .secondary-title {
        color: var(--heading-color);
        line-height: 1.4;
        font-weight: 700;
        font-size: 1.125rem;
        letter-spacing: -0.5px;
    }

    .subtitle {
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.5rem;
        line-height: 1.5;
        font-size: 0.75rem;
        color: var(--subtitle-color);
        opacity: 1;
    }

    .para {
        color: var(--text-color);
        font-size: 15px;
        font-weight: 400;
        line-height: 1.85;
    }

    /* SCROLL CLASSES FOR NAVBAR */

    .navbarScrolled {
        background-color: white;
    }
    .buttonScrolled {
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
    }
    .menuScrolled {
        svg {
            color: black;
        }
    }
    .linksScrolled {
        a {
            color: black;
        }
    }
`;


export default GlobalStyle