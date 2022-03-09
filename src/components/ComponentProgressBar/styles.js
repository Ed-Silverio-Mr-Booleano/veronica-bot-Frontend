import styled from 'styled-components';

export const Container = styled.div`

//Leyout Mobile
@media (max-width: 568px) and (min-width: 320px){
    .progressBar{
        display: block;
        margin: 0 auto !important;
        flex-direction: column;
        margin-bottom: 20px;

        p{
            font-size: 14px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding: 6px;
            color: #000;
            position: relative;
            right: 0 !important;
            left: 0;
            margin-top: 10px;
        }

        div{
            
            width: 400px;
            height: 25px;
            background: #f1f1f1;
            display: block;
            border-radius: 4px;
            position: relative;
            right: 0px;
            left: 0px;
            margin-bottom: 30px;
            
            span{
                width: 50%;
                height: 25px !important;
                display: flex;
                background: #7fba00;
                color: #000;
                border-radius:4px 0 0 4px;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
        }
    }
}

//Leyout desktop
@media (max-width: 1440px) and (min-width: 768px){
    .progressBar{
        display: block;
        margin: 0 auto !important;
        flex-direction: column;
        margin-bottom: 20px;

        p{
            font-size: 14px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding: 6px;
            color: #000;
            position: relative;
            right: 0 !important;
            left: 0;
            margin-top: 10px;
        }

        div{
            
            width: 400px;
            height: 25px;
            background: #f1f1f1;
            display: block;
            border-radius: 4px;
            position: relative;
            right: 0px;
            left: 0px;
            margin-bottom: 30px;
            
            span{
                width: 50%;
                height: 25px !important;
                display: flex;
                background: #7fba00;
                color: #000;
                border-radius:4px 0 0 4px;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
        }
    }
}
       .progressBar{
        margin-left: 180px;
        flex-direction: column;
        margin-bottom: 20px;

        p{
            font-size: 14px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding: 6px;
            color: #000;
            position: relative;
            right: 400px;
        }

        div{
            
            width: 400px;
            height: 25px;
            background: #f1f1f1;
            display: block;
            border-radius: 4px;
            position: relative;
            right: 394px;
            
            span{
                width: 50%;
                height: 25px !important;
                display: flex;
                background: #7fba00;
                color: #000;
                border-radius:4px 0 0 4px;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;
