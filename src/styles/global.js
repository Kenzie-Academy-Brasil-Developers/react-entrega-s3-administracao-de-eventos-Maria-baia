import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #ffe5d9;
        color: #e63946;
        text-align: center;
    }

    h1, li, button {
        padding: 10px;
        margin: 10px;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
    }

    img {
        width: 200px;
        height: 500px;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 890px;
        justify-content: space-between;
        background-color: #f1faee;
        border-radius: 10px;
    }

    button {
        cursor: pointer;
        background-color: #a8dadc;
        color: #457b9d;
        border-radius: 10px;
        border: 1px solid #457b9d;
    }

    @media (min-width: 1024px) {
        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }

        li {
            width: 300px;
        }
    }
`