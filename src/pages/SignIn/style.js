import styled from "styled-components";
import {Link} from 'react-router-dom';
import { darken } from "polished";


export const Wrapper = styled.div`
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled(Link)`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form{
        display: flex;
        flex-direction:column;
        margin-top: 30px;

        input{
            background: rgba(0,0,0,0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #191919;
            margin: 0 0 10px;

            &::placeholder{
                color: rgba(0, 0, 0, 0.7);
            }
        }

        button{
            width: 315px;
            margin: 5px 0 0;
            height: 44px;
            background: #f25022;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;

            &:hover{
                background: ${darken(0.03, '#f25530')};
            }
        }

        a{
            color: #00a4ef;
            margin: 5px 0 5px 0;
            font-size: 16px;
            opacity: 0.8;
            display: flex;
            justify-content: left;


            &:hover{
                opacity: 1;
            }
        }
    }
`;

