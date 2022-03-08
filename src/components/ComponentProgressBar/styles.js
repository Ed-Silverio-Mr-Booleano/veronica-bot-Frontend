import styled from 'styled-components';

export const Container = styled.div`
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
