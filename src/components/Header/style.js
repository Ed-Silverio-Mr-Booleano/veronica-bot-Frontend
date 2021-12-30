import styled from "styled-components";

export const Container = styled.div`
    background: #ffb900;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    background: #ffb900;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    align-items: center;


    nav{
        display: flex;
        align-items: center;

        a{
            padding: 0 0 0 10px;
            color: #000;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 16px;
        }
    }
`;