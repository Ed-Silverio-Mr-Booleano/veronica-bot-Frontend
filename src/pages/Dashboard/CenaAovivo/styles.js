import styled from "styled-components";

export const Wrapper = styled.div`

//Leyout Mobile
  @media (max-width: 568px) {

    .title{
        margin:0 20px 0 20px !important;
    }

    .video{
        margin:0 20px 0 20px !important;
    }

    div{

        h1{
            font-size: 18px !important;
            margin: 30px auto 4px auto !important;
        }
        p{
            font-size: 13px !important;
            margin: 0px auto !important;
        }

        hr{
            margin: 5px auto !important;
        }
    }

    .statu{
            margin-top: 25px !important;
            margin-bottom: 13px !important;
            margin:0 20px 0 20px !important;

            h4{
                font-size: 14px !important;
            }

            p{
                font-size: 13px !important;
            }
        }

        .likeIcon{
            margin:0 20px 0 20px !important;
            margin: 13px auto;
            max-width: 1000px;
            display: flex;
            align-items: center;
            padding: 10px 0px;

            p{
                font-size: 16px;
                font-weight: 600;
                margin-left: 10px !important; 
                
            }

            svg{
                width: 30px;
                height: 30px;
            }

        }

        .likeYoutube{
            margin:0 20px 0 20px !important;
            margin: 30px auto;
            max-width: 1000px;
            padding: 10px 0;

            p{
                width: 100%;
                height: auto !important;
                background: #f1f1f1;
                padding: 15px 10px !important;
                border: 1px solid #191919;
            }
        }

        hr{
            
            max-width: 440px !important;
            margin: 0px auto !important;
            height: 2px;
            background: #191919;
            border: none;
        }

        .FilaPacote{
            
            max-width: auto !important;
            margin: 10px auto !important;

            .pacote{
                margin:0 20px 0 20px !important;
                display: flex;
                width: auto !important;
                height: auto !important;
                padding: 10px !important;
                background: #f1f1f1;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px !important;

                svg{
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                }
            }

            .comentario{
                margin:0 20px 0 20px !important;
                display: flex;
                width: auto !important;
                height: auto !important;
                background: #f1f1f1;
                padding: 10px;

                img{
                    width: 35px !important;
                    height: 35px !important;
                    border-radius: 50%;
                    margin-left: 0px !important;
                    margin-right: 10px;
                }

                span{

                    p{
                        padding: 0;
                        margin: 0 0 0 10px;
                        display: block !important;
                        align-items: center;

                        strong{
                            color: #00a4ef;
                        }
                    }

                }
            }

            .editar{
                width: 180px;
                height: 60px;
                background: #f1f1f1;
                margin: 10px auto !important;
                align-items: center;
                justify-content: center;
                text-align: center;
                margin-top: 10px !important;
                margin-bottom: 50px !important;

                span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 0 4px 0;
                    cursor: pointer;

                    svg{
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                   
                }

                strong{
                    padding: 0;
                    display: flex;
                    color: #00a4ef;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    text-decoration: underline;
                }
              

                p{
                    padding: 0;
                    margin: 0 0 0 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .btn{
                max-width: 1000px;
                height: 70px;
                margin-bottom: 30px !important;
                

            button{
                width: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 44px;
                background: #f1f1f1;
                font-weight: bold;
                color: #00a4ef;
                border: 0;
                border-radius: 4px;
                font-size: 16px;
                margin: 30px auto !important;

                svg{
                    width: 23px;
                    height: 23px;
                    margin-right: 10px;
                }
                
            }
        }
        }

      
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

    .FilaPacote{
        max-width: 1000px;
        margin: 10px auto;

        .pacote{
            display: flex;
            width: 500px;
            height: 80px;
            background: #f1f1f1;
            justify-content: center;
            align-items: center;
            margin-left: 10px;

            span{

                p{
                    padding: 0;
                    margin: 0 0 0 10px;
                    display: flex;
                    align-items: center;
                }

            }
        }

        .comentario{
            display: flex;
            width: 500px;
            height: 80px;
            background: #f1f1f1;
            justify-content: center;
            align-items: center;
            margin-left: 10px;

            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-left: 20px;
            }

            span{

                p{
                    padding: 0;
                    margin: 0 0 0 10px;
                    align-items: center;
                }

            }
        }

        .editar{
            width: 180px;
            height: 60px;
            background: #f1f1f1;
            align-items: center;
            text-align: center;
            margin-left: 10px;

            span{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px 0 4px 0;
                
            }

            strong{
                padding: 0;
                display: flex;
                color: #00a4ef;
                align-items: center;
                justify-content: center;
            }
            

            p{
                padding: 0;
                margin: 0 0 0 10px;
                display: flex;
                align-items: center;
                justify-content: center;
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
            background: #f1f1f1;
            font-weight: bold;
            color: #00a4ef;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            margin-bottom: 100px;
            
        }
    }
}


        

          

        
    

`;