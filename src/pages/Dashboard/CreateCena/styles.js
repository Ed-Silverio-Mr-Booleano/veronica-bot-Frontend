import styled from "styled-components";

export const Wrapper = styled.div`

    div{
        margin: 0 0 20px 0;

        h1{
            font-size: 30px;
            margin: 50px auto 10px auto;
            max-width: 1000px;
        }

        p{
            font-size: 16px;
            margin: 10px auto;
            max-width: 1000px;
        }

        hr{
            max-width: 1000px;
            display: flex;
            align-items: center;
            margin: 10px auto;
            justify-content: center;
            height: 2px;
            background: #191919;
            border: none;
        }
    }

    .userIcon{
            margin: 30px auto;
            max-width: 1000px;
            display: flex;
            align-items: center;

            span{
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
                
            }
        }

        div{
            
            label{
                position: relative;
                left: 180px;
                font-weight: 800;
                font-size: 15px;
                padding: 4px;
                align-items: center;
            }
        }

        .likeIcon{
            margin: 30px auto;
            max-width: 1000px;
            display: flex;
            align-items: center;

            span{
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
                
            }

            input{
                margin-left: 10px;
            }
        }

        .likeYoutube{
            margin: 30px auto;
            max-width: 1000px;
            
            margin-bottom: 50px;
            span{
                width: 100%;
                background: #f1f1f1;
                padding: 10px;
                border: 1px solid #191919;
            }

            p{
                width: 100%;
                height: 80px;
                background: #f1f1f1;
                padding: 10px;
                border: 1px solid #191919;
            }
        }

        .select{
            margin: 30px auto;
            max-width: 1000px;

            select{
                width: 200px;
                height: 30px;
            }
        }

        .btn{
            margin: 5px auto;
            max-width: 1000px;

            button{
                width: 250px;
                height: 44px;
                background: #f25022;
                font-weight: bold;
                color: #fff;
                border: 0;
                border-radius: 4px;
                font-size: 16px;
                margin-bottom: 60px;
            }
        }
`;