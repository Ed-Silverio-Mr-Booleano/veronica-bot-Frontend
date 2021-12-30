import React from 'react';
import Header from '../../../components/Header';
import { Wrapper } from './styles';
import { BsCameraVideoFill, BsBullseye, BsStopwatch, BsPlusCircleFill} from 'react-icons/bs'
import Avatar from '../../../assets/images/avatar.jpg';

export default function CenaAovivo() {
  return (
    <Wrapper>
      <Header />
          <div>
            <h1>Cena ao Vivo</h1>
            <p>Atribuída para Monica</p>
            <hr/>
         </div>

         <div className='video'>
           <h1>Aqui vai a live</h1>
         </div>

         
         <div className='statu'>
            <BsCameraVideoFill size={20} color="#000"/>
            <h4>
              BITCOIN: O QUE ACONTECEU ONTEM NA CORREÇÃO? QUEM
              VENDEU? ALGO PREOCUPANTE? ANÁLISE ON CHAIN
            </h4>
         </div>

         <div className='likeIcon'>
          <BsBullseye size={35} color="#000"/> 
          <p> Objetivo da cena: </p> 
        </div>

        <div className='likeYoutube'>
          <p>
            Fazer o criador de conteúdo parecer um cara muito
            inteligente, elogiar o conteúdo do canal, talvez acrescentar
            um contra ponto, contar uma história comovente que
            colabore com a tese do vídeo, e em alguns comentários
            pedir que ele faça um vídeo sobre a SoluçãoX
          </p> 
        </div>

        <hr/>

        <div className='likeIcon'>
          <p> Fila de comentarios</p> 
        </div>

        <div className='FilaPacote'>
            <div className='pacote'>
              <BsStopwatch size={25} color="#000"/> 
                <span> 
                  <p> Primeiro comentário se inicia em:12/12/2021 às 20:15:30 </p> 
                </span> 
            </div>

            <div className='comentario'>
                <img src={Avatar}/> 
                <span> 
                  <p> 
                    1# Alessandro123 Live top! Sou inscrito do canal e acompanho
                    todos seu vídeo. Parabéns pelo excelente conteúdo! Mande
                    um salve ai para Goiânia! 
                 </p> 
                </span> 
            </div>

            <div className='editar'>
                <span> 
                  <BsStopwatch size={23} color="#00a4ef"/> 
                  <strong> Editar</strong> 
                </span>

                  <p> Espere 30 segundos </p> 

            </div>

           
            <div className='btn'>
             <button>
               <BsPlusCircleFill size={20} color="#00a4ef"/>
               Adicionar comentário
              </button>
            </div>
          </div>
    </Wrapper>
  );
}
