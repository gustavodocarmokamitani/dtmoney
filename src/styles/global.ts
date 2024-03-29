import { createGlobalStyle } from 'styled-components'

export const GlobalStyle  = createGlobalStyle`
    :root {
        --backgroud: #F0F2F5;
        --red: #E62E4D;
        --blue: #5429CC;

        --blue-light: #6933ff;

        --green: #33CC95;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;        
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--backgroud);
        -webkit-font-smoothing: antialiased;
        font-family: "Poppins", sans-serif;
    }

    border-style, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--backgroud);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
`