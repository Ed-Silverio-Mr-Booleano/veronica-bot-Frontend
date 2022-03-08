import styled from "styled-components";

export const Container = styled.div`

@media (max-width: 568px) {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: end;
    align-items: center;
    background: blue;
    margin:0px 0px 0px 0px !important;

    nav{
        display: flex;
        align-items: center;
        margin-right: 0px !important;
        font-size: 13px;

        li{
            font-size: 15px;
            margin-right: 10px;
            list-style: none;
            cursor: pointer;
        }
    }

}
    background: #c1c1c1;
    width: 100%;
    height: 64px;
    
    display: flex;
    justify-content: end;
    align-items: center;


    nav{
        display: flex;
        align-items: center;
        margin-right: 175px;
        color: #000;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 16px;

        li{
            font-size: 15px;
            margin-right: 10px;
            list-style: none;
            cursor: pointer;
        }
    }
`;
