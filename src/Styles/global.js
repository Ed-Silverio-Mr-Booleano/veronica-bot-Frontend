import { createGlobalStyle } from "styled-components";
export default createGlobalStyle `

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
        --webkit-font-smoothing: antialiased;
    }

    a{
        text-decoration: none;
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    button{
        cursor:pointer;
    }
`;