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
    .subtitle {
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.5rem;
        line-height: 1.5;
        font-size: 0.75rem;
        color: var(--subtitle-color);
        opacity: 1;
        @media screen and (min-width: 640px) {
            font-size: .9rem;
        }
    }
    .primary-title {
        line-height: 1.3;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--heading-color);
        letter-spacing: -0.5px;
        @media screen and (min-width: 640px) {
            font-size: 1.8rem;
        }
        @media screen and (min-width: 1620px) {
            font-size: 2.3rem;
        }
    }

    .secondary-title {
        color: var(--heading-color);
        line-height: 1.4;
        font-weight: 700;
        font-size: 1.125rem;
        letter-spacing: -0.5px;
        margin-bottom: 0.6rem;
        @media screen and (min-width: 1220px) {
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
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