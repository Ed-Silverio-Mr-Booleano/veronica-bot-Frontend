import styled from "styled-components";

export const Wrapper = styled.div`

//Leyout Mobile
@media (max-width: 568px) and (min-width: 320px){
    .title{
        margin: 0 0 20px 20px !important;

        h1{
            font-size: 20px;
            margin: 50px auto 10px auto;
            max-width: 1000px;
        }

        p{
            font-size: 14px;
            margin: 10px auto;
            max-width: 1000px;
        }
    }
    .video{
        margin:0 20px 0 20px !important;
    }
    .video{
            max-width: 1000px;
            margin: 10px auto;
            

            h1{
                width: 100%;
                height: 150px;
                background: #191919;
                text-align: center;
                color: #fff;
                display: flex;
                align-items:center;
                justify-content: center;
            }
    }

    .statu{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 20px !important;
            margin-top: 40px;

            h4{
                font-size: 14px !important;
                color: #00a4ef;
                width: 100%;
                margin: 0 0 0 10px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
            p{
                font-size: 14px;
                font-weight: 700;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                padding: 4px;
                color: #000;
            }
        }

        .likeIcon{
            margin: 30px auto;
            max-width: 1000px;
            display: flex;
            align-items: center;
            margin:0 20px 0 20px !important;


            p{
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
                
            }

        }

        .likeYoutube{
            margin:0 20px 0 20px !important;
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
                height: auto !important;
                background: #f1f1f1;
                padding: 10px;
                border: 1px solid #191919;
                margin-bottom: 30px;
            }
        }

        .FilaPacote{
            max-width: 100% !important;
            margin: 10px auto;
            flex-direction: column !important;
            margin:0 20px 0 20px !important;

            
          
            .pacote{
                display: flex;
                width: 430px !important;
                height: 80px;
                background: #f1f1f1;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
                
            }

            span{
                display: flex;
                flex-direction: column;
                padding: 10px;


                p{
                     padding: 0;
                     margin: 0;
                     margin-top: 30px;
                }

                .progressBar{
                    flex-direction: column;
                    margin-bottom: 20px;

                    div{
                        
                        width: 350px !important;
                        height: 20px;
                        background: #fff;
                        display: block;
                        border-radius: 4px;

                        span{
                            width: 50%;
                            height: 20px !important;
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

        }

         .Arquivo{
            
            max-width: 700px;
            margin: 10px auto;
            display: flex;
            margin:10px 20px 0 20px !important;
            background: #f1f1f1;

            .sms{
                width: 50%;
                

                .chat{
                    display: flex;
                    align-items: center;
                    margin-top: 30px !important;
                    img{
                        width: 35px !important;
                        height: 35px !important;
                        border-radius: 50%;
                        margin-right: 10px;
                        margin-left: 20px;
                    }

                    span{
                        font-size: 14px !important;
                        a{
                            color: #00a4ef;
                            margin-top: 10px !important;
                        }
                    }
                }
            }

            .responder{
                width: 50%;

                .chat{
                    display: flex;
                    align-items: center;
                    
                    margin-top: 60px;
                    img{
                        width: 35px !important;
                        height: 35px !important;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                    p{
                        font-size: 14px !important;
                        margin-right: 20px !important;

                    }
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
                margin: 30px auto !important;
                
            }
        }


}

//Leyout Table
@media (max-width: 1024px) and (min-width: 568px){
    .title{
        margin: 0 0 20px 100px !important;

        h1{
            font-size: 24px;
            margin: 50px auto 10px auto;
            max-width: 1000px;
        }

        p{
            font-size: 14px;
            margin: 10px auto;
            max-width: 1000px;
        }
    }

    .video{
        margin:0 100px 0 100px !important;
    }

    .statu{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 100px !important;
            margin-top: 40px;

            h4{
                font-size: 14px !important;
                color: #00a4ef;
                width: 100%;
                margin: 0 0 0 10px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
            p{
                font-size: 14px;
                font-weight: 700;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                padding: 4px;
                color: #000;
            }
        }

        .likeIcon{
            margin: 30px auto;
            max-width: 1000px;
            display: flex;
            align-items: center;
            margin:0 20px 0 100px !important;


            p{
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px;
                
            }

        }

        .likeYoutube{
            margin: 20px 100px 0 100px !important;
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
                height: auto !important;
                background: #f1f1f1;
                padding: 10px;
                border: 1px solid #191919;
                margin-bottom: 30px;
            }
        }

        .FilaPacote{
            max-width: 100% !important;
            margin: 10px auto;
            flex-direction: flex !important;
            margin:0 100px 0 100px !important;

            
          
            .pacote{
                display: flex;
                width: 400px !important;
                height: 80px;
                background: #f1f1f1;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
                
            }

            span{
                display: flex;
                flex-direction: column;
                padding: 10px;


                p{
                     padding: 0;
                     margin: 0;
                     margin-top: 30px;
                }

                .progressBar{
                    flex-direction: column;
                    margin-bottom: 20px;

                    div{
                        
                        width: 300px !important;
                        height: 20px;
                        background: #fff;
                        display: block;
                        border-radius: 4px;

                        span{
                            width: 50%;
                            height: 20px !important;
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

        }

        .Arquivo{
            
            max-width: 1020px !important;
            margin: 10px auto;
            display: flex;
            margin:10px 100px 0 100px !important;
            background: #f1f1f1;

            .sms{
                width: 50%;
                

                .chat{
                    display: flex;
                    align-items: center;
                    margin-top: 30px !important;
                    img{
                        width: 40px !important;
                        height: 40px !important;
                        border-radius: 50%;
                        margin-right: 10px;
                        margin-left: 20px;
                    }

                    span{
                        font-size: 14px !important;
                        
                        a{
                            color: #00a4ef;
                            padding-top: 20px !important;
                        }
                    }
                }
            }

            .responder{
                width: 50%;

                .chat{
                    display: flex;
                    align-items: center;
                    
                    margin-top: 60px;
                    img{
                        width: 40px !important;
                        height: 40px !important;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                    p{
                        font-size: 14px !important;
                        margin-right: 20px !important;

                    }
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
                margin: 30px auto !important;
                
            }
        }

        

}

//Leyout desktop
@media (max-width: 1440px) and (min-width: 768px){

}
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

    .video{
            max-width: 1000px;
            margin: 10px auto;
            

            h1{
                width: 100%;
                height: 150px;
                background: #191919;
                text-align: center;
                color: #fff;
                display: flex;
                align-items:center;
                justify-content: center;
            }
    }

        .statu{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 180px;
            margin-top: 40px;

            h4{
                font-size: 15px;
                color: #00a4ef;
                width: 100%;
                margin: 0 0 0 10px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
            p{
                font-size: 14px;
                font-weight: 700;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                padding: 4px;
                color: #000;
            }
        }

        .likeIcon{
            margin: 30px auto;
            max-width: 1000px;
            display: flex;
            align-items: center;
            

            p{
                font-size: 16px;
                font-weight: 600;
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


        .FilaPacote{
            max-width: 1000px;
            margin: 10px auto;
            display: flex;
            
          
            .pacote{
                display: flex;
                width: 500px;
                height: 80px;
                background: #f1f1f1;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
            }

            span{
                display: flex;
                flex-direction: column;
                padding: 10px;


                p{
                     padding: 0;
                     margin: 0;
                     margin-top: 30px;
                }

                .progressBar{
                    flex-direction: column;
                    margin-bottom: 20px;

                    div{
                        
                        width: 400px;
                        height: 20px;
                        background: #fff;
                        display: block;
                        border-radius: 4px;

                        span{
                            width: 50%;
                            height: 20px !important;
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

        }

        .Arquivo{
            
            max-width: 700px;
            margin: 10px auto;
            display: flex;

            background: #f1f1f1;

            .sms{
                width: 50%;
                

                .chat{
                    display: flex;
                    align-items: center;
                    margin-left: 20px;
                    margin-top: 30px;
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                    span{
                        a{
                            color: #00a4ef;
                        }
                    }
                }
            }

            .responder{
                width: 50%;

                .chat{
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    
                    margin-top: 60px;
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
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
                margin: 0 auto;
                
            }
        }
`;