import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


    :root {
        --primary-color: #1F3E76;
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

    /* .navbar {
        background-color: transparent;
    } */
    .navbarScrolled {
        background-color: white;
    }

    /* .button {
        background: transparent;
    } */
    .buttonScrolled {
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
    }

    /* .menu {
        svg{
            color: white;
        }
    } */
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