import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background: linear-gradient(#FFEFBA, #FFFFFF);
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto Condensed', sans-serif;
        color: #000;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #000;
    }

    .score {
        color: #000;
        font-size: 2rem;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(to left top, #FF5F6D, #FFC371);
        box-shadow: 0 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        font-size: 20px;
    }

    .start {
        max-width: 200px;
    }
`

