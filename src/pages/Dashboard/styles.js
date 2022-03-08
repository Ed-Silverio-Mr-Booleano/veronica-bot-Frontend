import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
    background: #FFF;
    

    h1{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding: 25px 0;
        font-size: 20px !important;
        text-align: center;
    }

    span{
        color: #00a4ef;
        font-weight: bold;
    }

    .d-flex{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0 0px 10px;

        p{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding-left: 20px;
        }

        strong{
            font-size: 18px;
            font-weight: bold;
        }
    }

   div{
       display: flex;
       align-items: center;
       justify-content: center;
       
    }

    .title{
        display: flex;
        align-items: center;
        margin-left: 180px;
        margin-top: 40px;

        p{
            font-size: 18px;
            font-weight: 700;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding: 4px;
            color: #000;
            margin: 0 0 0 8px;
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
    
    hr{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #191919;
        max-width: 1000px;
        height: 2px;
        margin: 10px auto;
        border: none;
    }

 

    .row{
        display: flex;
       

        .cometario_Admin{
            width: 30%;
            height: 300px;
            display: flex;
            background: #ffb900;
            margin: 10px;
            margin-bottom: 50px;

            .cometario_profile{
                width: 25%;
                height: 300px;
                display: block;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                padding: 20px;

                img{
                    width: 60px;
                    height: 60px;
                    display: block;
                    margin: 0 auto;
                }

                h1{
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff;
                    padding: 5px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }
                p{
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    margin-bottom: 4px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }

                span{
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }

            }

            .cometario_description{
                width: 75%;
                height: 300px;
                display: block;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                padding: 20px;

                h1{
                    padding: 0 0 10px 5px;
                    font-size: 20px;
                    display: flex;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }

                p{
                    font-size: 15px;
                    padding: 8px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }
                

                .comentario_progressBar{
                    div{
                        margin-top: 8px;
                        width: 260px;
                        height: 20px;
                        background: #f1f1f1;
                        display: block;
                        border-radius: 4px;
                        margin-bottom: 10px;
            
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

                .comentario_statu{     

                    h4{
                        font-size: 10px;
                        color: #00a4ef;
                        width: 100%;
                        margin: 0 0 0 10px;
                        padding: 8px;
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }
                    
                }
            }
        }

        .cometario{
            width: 30%;
            height: 300px;
            display: flex;
            background: #f1f1f1;
            margin: 10px;
            margin-bottom: 50px;

            .cometario_profile{
                width: 25%;
                height: 300px;
                display: block;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                padding: 20px;

                img{
                    width: 60px;
                    height: 60px;
                    display: block;
                    margin: 0 auto;
                }

                h1{
                    font-size: 13px;
                    font-weight: 700;
                    color: #000;
                    padding: 5px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }
                p{
                    font-size: 14px;
                    color: #000;
                    text-align: center;
                    margin-bottom: 4px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }

                span{
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }

            }

            .cometario_description{
                width: 75%;
                height: 300px;
                display: block;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                padding: 20px;

                h1{
                    padding: 0 0 10px 5px;
                    font-size: 20px;
                    display: flex;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }

                p{
                    font-size: 15px;
                    padding: 8px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            
                }
                

                .comentario_progressBar{
                    div{
                        margin-top: 8px;
                        width: 260px;
                        height: 20px;
                        background: #fff;
                        display: block;
                        border-radius: 4px;
                        margin-bottom: 10px;
            
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

                .comentario_statu{     

                    h4{
                        font-size: 10px;
                        color: #00a4ef;
                        width: 100%;
                        margin: 0 0 0 10px;
                        padding: 8px;
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }
                    
                }
            }
        }
    }
    

`;

