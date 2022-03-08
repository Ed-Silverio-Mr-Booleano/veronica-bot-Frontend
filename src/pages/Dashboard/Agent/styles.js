import styled from "styled-components";

export const Wrapper = styled.div`
    background: #FFF;

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

        form{
            margin: 30px auto;
            max-width: 1000px;
            margin-top: 30px;
            display: flex;

            label{
                display: flex;
                flex-direction: column;
                margin: 10px 0 10px 10px;
                padding: 8px;
                width: 320px;

                input{
                    max-width: 350px !important;
                    background: rgba(0,0,0,0.1);
                    border: 0;
                    border-radius: 4px;
                    height: 44px;
                    padding: 0 15px;
                    color: #191919;
                    margin: 0 0 10px;
                    display: block;
                 }
             }
        }

        .imgProfile{
            margin: 30px auto;
            max-width: 1000px;
            display: flex;

            img{
                width: 150px;
                height: 130px;
                margin-right: 20px;
            }

            span{
                p{
                    font-weight: 800;
                    margin-bottom: 30px;
                }
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
       

        div{
            .listDireito{
                margin: 5px auto;
                max-width: 1000px;
                display: flex;
                align-items: center;


                img{
                    width: 60px;
                    height: 60px;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 18px;
                        padding: 0;
                        margin: 0;

                        span{
                            font-size: 16px;
                            margin-left: 20px;
                            font-weight: bold;
                        }
                    }
                }

                a{
                    width: 550px;
                    font-size: 18px;
                    margin-left: 20px;
                    display: flex;
                    justify-content: end;
                    color: #00a4ef;
                }
            }

            .listComentador{
                margin: 10px auto;
                max-width: 1000px;
                display: flex;
                align-items: center;

                img{
                    width: 60px;
                    height: 60px;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 18px;
                        padding: 0;
                        margin: 0;
                    }
                }

                a{
                    width: 524px;
                    font-size: 18px;
                    margin-left: 20px;
                    display: flex;
                    justify-content: end;
                    color: #00a4ef;
                }
            }
        }

`;