import styled from "styled-components";

export const Wrapper = styled.div`
width: 100% !important;

//Leyout Mobile
@media (max-width: 568px) and (min-width: 320px){
    .title{
        margin: 0 20px 20px 20px !important;

        h1{
            font-size: 17px !important;
            margin: 50px auto 10px auto;
            max-width: 1000px;
        }

        p{
            font-size: 14px !important;
            margin: 10px auto;
            max-width: 1000px;
        }
    }

      .userIcon{
        margin: 30px 0 20px 20px !important;

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
                left: 40px !important;
                font-weight: 800;
                font-size: 14px !important;
                padding: 4px;
                align-items: center;
            }
        }

        form{
            margin: 30px 0 20px 35px !important;

            max-width: 400px !important;
            margin-top: 30px;
            flex-direction: column;

            label{
                display: flex;
                flex-direction: column;
                margin: 10px 0 10px 10px;
                padding: 8px;
                width: 350px !important;

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
            margin: 30px 0 20px 20px !important;
            max-width: 1000px;
            display: flex;

            img{
                width: 100px !important;
                height: 100px !important;
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
                width: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 44px;
                background: #f25022;
                font-weight: bold;
                color: #fff;
                border: 0;
                border-radius: 4px;
                font-size: 16px;
                margin: 40px auto !important;
                
            }
        }

        div{

            .listDireito{
                margin: 30px 0 40px 20px !important;
                max-width: 1000px;
                display: flex;
                align-items: center;


                img{
                    width: 50px !important;
                    height: 50px !important;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 16px !important;
                        padding: 0;
                        margin: 0;

                        span{
                            font-size: 14px !important;
                            margin-left: 20px;
                            font-weight: bold;
                        }
                    }
                }

                a{
                    width: 550px;
                    font-size: 18px;
                    margin-left: 0px !important;
                    display: flex;
                    justify-content: center !important;
                    color: #00a4ef;
                }
            }

            .listComentador{
                margin: 30px 0 20px 20px !important;

                max-width: 1000px;
                display: flex;
                align-items: center;

                img{
                    width: 50px !important;
                    height: 50px !important;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 16px !important;
                        padding: 0;
                        margin: 0;
                    }
                }

                a{
                    width: 550px;
                    font-size: 18px;
                    margin-left: 0px !important;
                    display: flex;
                    justify-content: center !important;
                    color: #00a4ef;
                }
            }
        }
}

//Leyout Table
@media (max-width: 1024px) and (min-width: 568px){
    .title{
        margin: 0 20px 20px 100px !important;

        h1{
            font-size: 18px !important;
            margin: 50px auto 10px auto;
            max-width: 1000px;
        }

        p{
            font-size: 14px !important;
            margin: 10px auto;
            max-width: 1000px;
        }
    }

    .userIcon{
        margin: 30px 0 20px 100px !important;

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
                left: 100px !important;
                font-weight: 800;
                font-size: 14px !important;
                padding: 4px;
                align-items: center;
            }
        }

        form{
            margin: 30px 0 20px 35px !important;

            max-width: 900px !important;
            margin-top: 30px;
            display: flex;

            label{
                display: flex;
                flex-direction: column;
                margin: 10px 0 10px 10px;
                padding: 8px;
                width: 350px !important;

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
            margin: 30px 0 20px 100px !important;
            max-width: 1000px;
            display: flex;

            img{
                width: 100px !important;
                height: 100px !important;
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
                width: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 44px;
                background: #f25022;
                font-weight: bold;
                color: #fff;
                border: 0;
                border-radius: 4px;
                font-size: 16px;
                margin: 40px auto !important;
                
            }
        }

        div{

            .listDireito{
                margin: 30px 0 20px 100px !important;
                max-width: 1000px;
                display: flex;
                align-items: center;


                img{
                    width: 50px !important;
                    height: 50px !important;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 16px !important;
                        padding: 0;
                        margin: 0;

                        span{
                            font-size: 14px !important;
                            font-weight: bold;
                        }
                    }
                }

                a{
                    width: 550px;
                    font-size: 18px;
                    margin-left: 0px !important;
                    display: flex;
                    justify-content: end !important;
                    color: #00a4ef;
                }
            }

            .listComentador{
                margin: 30px 0 20px 100px !important;

                max-width: 1000px;
                display: flex;
                align-items: center;

                img{
                    width: 50px !important;
                    height: 50px !important;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 16px !important;
                        padding: 0;
                        margin: 0;
                    }
                }

                a{
                    width: 550px;
                    font-size: 18px;
                    margin-left: 0px !important;
                    display: flex;
                    justify-content: end !important;
                    color: #00a4ef;
                }
            }
        }
}

//Leyout desktop
@media (max-width: 1440px) and (min-width: 768px){
    .title{
        margin: 0 20px 20px 20px !important;

        h1{
            font-size: 18px !important;
            margin: 50px auto 10px auto;
            max-width: 1000px;
        }

        p{
            font-size: 14px !important;
            margin: 10px auto;
            max-width: 1000px;
        }
    }

    .userIcon{
        margin: 20px 20px 20px 180px !important;


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
                left: 220px !important;
                font-weight: 800;
                font-size: 14px !important;
                padding: 4px;
                align-items: center;
            }
        }

        form{
            margin: 30px 20px 20px 220px !important;


            max-width: 900px !important;
            margin-top: 30px;
            display: flex;

            label{
                display: flex;
                flex-direction: column;
                margin: 10px 0 10px 10px;
                padding: 8px;
                width: 350px !important;

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
            margin: 0 20px 20px 220px !important;

            max-width: 1000px;
            display: flex;

            img{
                width: 100px !important;
                height: 100px !important;
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
                width: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 44px;
                background: #f25022;
                font-weight: bold;
                color: #fff;
                border: 0;
                border-radius: 4px;
                font-size: 16px;
                margin: 40px auto !important;
                
            }
        }

        div{

            .listDireito{
                margin: 30px 20px 20px 220px !important;

                max-width: 1000px;
                display: flex;
                align-items: center;


                img{
                    width: 50px !important;
                    height: 50px !important;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 16px !important;
                        padding: 0;
                        margin: 0;

                        span{
                            font-size: 14px !important;
                            font-weight: bold;
                        }
                    }
                }

                a{
                    width: 550px;
                    font-size: 18px;
                    margin-left: 0px !important;
                    display: flex;
                    justify-content: end !important;
                    color: #00a4ef;
                }
            }

            .listComentador{
                margin: 0 20px 20px 220px !important;


                max-width: 1000px;
                display: flex;
                align-items: center;

                img{
                    width: 50px !important;
                    height: 50px !important;
                }

                span{
                    margin-left: 20px;
                    h1{
                        font-size: 16px !important;
                        padding: 0;
                        margin: 0;
                    }
                }

                a{
                    width: 550px;
                    font-size: 18px;
                    margin-left: 0px !important;
                    display: flex;
                    justify-content: end !important;
                    color: #00a4ef;
                }
            }
        }
    }
`;