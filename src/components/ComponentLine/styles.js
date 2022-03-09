import styled from 'styled-components';

export const Container = styled.div`

//Leyout Mobile
@media (max-width: 568px) and (min-width: 320px){
    hr{
        max-width: 440px !important;
        margin: 0px auto !important;
        height: 2px;
        background: #191919;
        border: none;
    }
}

//Leyout table
@media (max-width: 1024px) and (min-width: 568px){
    hr{
        max-width: 800px !important;
        margin: 0px auto !important;
        height: 2px;
        background: #191919;
        border: none;
    }
}


//Leyout desktop
@media (max-width: 1440px) and (min-width: 768px){
    hr{
        max-width: 1000px !important;
        margin: 0px auto !important;
        height: 2px;
        background: #191919;
        border: none;
    }
}

     hr{
            width: 1000px;
            border-top: 1px solid #000;
            border-bottom: none;
            border-left: none;
            border-right: none;
        }
`;
