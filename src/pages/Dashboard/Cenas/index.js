import React from 'react';
import Header from '../../../components/Header';
import { Wrapper } from './styles';
import { BsCameraVideoFill,BsArchiveFill,BsPlusCircleFill,BsChatFill, BsBullseye, BsCheckLg, BsGearFill } from 'react-icons/bs'
import Avatar from '../../../assets/images/avatar.jpg';

export default function Cenas() {
  return(
        <Wrapper>
          <Header />

          <div>
            <h1>Cena</h1>
            <p>Atribuída para Monica</p>
            <hr/>
         </div>

         <div className='video'>
           <h1>Aqui vai o video</h1>
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
          <p> Fila de Pacotes </p> 
        </div>

        <div className='FilaPacote'>
          <div className='pacote'>
            <BsCheckLg size={25} color="#000"/> 
              <span> 
                <p> 62 Comentários executados com sucesso! </p>

                <div className='progressBar'>
                  <div>
                      <span>50%</span>
                  </div>
                </div>
                
              </span> 
          </div>

          <div className='pacote'>
            <BsCheckLg size={25} color="#000"/> 
              <span> 
                <p> 62 Comentários executados com sucesso! </p>

                <div className='progressBar'>
                  <div>
                      <span>50%</span>
                  </div>
                </div>
                
              </span> 
          </div>
         
        </div>

        <div className='FilaPacote'>
            <div className='pacote'>
              <BsGearFill size={25} color="#000"/> 
                <span> 
                  <p> 62 Comentários executados com sucesso! </p>

                  <div className='progressBar'>
                    <div>
                        <span>50%</span>
                    </div>
                  </div>
                  
                </span> 
            </div>
         </div>

         <div className='likeIcon'>
          <BsArchiveFill size={35} color="#000"/> 
          <p> 8 comentarios no pacote </p> 
        </div>

        <div className='Arquivo'>
          <div className='sms'> 
            <div className='chat'>
              <img src={Avatar}/>

              <span> 
                1# Alessandro123 Muito bem video! Eu vendi peguei
                5% de lucro! Toma meu like ai irmão! 
                <br /> 
                
                <a> Responder </a> 
              </span> 

            </div> 

          </div> 

          <div className='responder'> 
            <div className='chat'>
                <img src={Avatar}/>
                <p> 
                  1# Alessandro123 Muito bem video! Eu vendi peguei
                  5% de lucro! Toma meu like ai irmão!
                </p> 
            </div> 
          </div> 
        </div>

        <div className='likeIcon'>
          <BsPlusCircleFill size={20} color="#00a4ef"/> 
          <p> Adicionar comentário geral </p> 
        </div>

        <div className='btn'>
             <button>
               <BsChatFill size={20} color="#fff"/>
                Executar pacote de 2 comentários 
              </button>
        </div>
      
        </Wrapper>
    );
}
