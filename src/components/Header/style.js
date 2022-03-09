import styled from "styled-components";

export const Container = styled.div`
// Leyout Mobile
@media (max-width: 568px) {
    background: #c1c1c1;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: end !important;
    align-items: center !important;
    margin:0px 0px 0px 0px !important;

    nav{
        display: flex;
        align-items: center;
        margin-right: 10px !important;
        font-size: 13px;

        li{
            font-size: 15px;
            margin-right: 10px;
            list-style: none;
            cursor: pointer;
        }
    }

}

//Leyout Table
@media (max-width: 1024px) and (min-width: 568px){
    background: #c1c1c1;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: end !important;
    align-items: center !important;
    margin:0px 0px 0px 0px !important;

    nav{
        display: flex;
        align-items: center;
        margin-right: 12px !important;
        font-size: 13px;
    }
}

//Leyout Desktop
@media (max-width: 1440px) and (min-width: 768px){
    background: #c1c1c1;
    width: 100%;
    height: 64px;
    
    display: flex;
    justify-content: end !important;
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
}
  
`;
