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
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`