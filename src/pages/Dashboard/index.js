import React from 'react';
import { BsTrophyFill, BsPencilSquare, BsCameraVideoFill, BsPersonSquare } from 'react-icons/bs'
import { Wrapper } from './styles';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import Avatar from '../../assets/images/avatar.jpg';

import Line from '../../components/ComponentLine';
import ProgressBar from '../../components/ComponentProgressBar';
import Button from '../../components/ComponentButton';

export default function Dashboard() {
  return (
    <Wrapper>
      <Header />

      <h1>Olá <span>Tony</span>, você é o Administrador do sistema</h1>
      <div className='d-flex'>
        <BsTrophyFill size={45} color="#000"/>
        <p>
        <span>6</span> <strong>Conquistas</strong> <br />
          Cada conquista é um video produzido por influência dos 
          comentários. Agradeça com mais comentários.
        </p>
      </div>

      <div>
        <Link to="/agent">
          <Button title = "Cadastrar novo agente" />
        </Link>

        <Link to="/create">
          <Button className='btn' title = "Criar nova cena" />
        </Link>
      </div>

      <span className='title'>
        <BsPencilSquare size={20} color="#000"/>
        <p>Você tem 2 cenas para finalizar:</p>
      </span>
      <Line />

      <div className='statu'>
        <BsCameraVideoFill size={20} color="#000"/>
        <h4>
          BITCOIN: O QUE ACONTECEU ONTEM NA CORREÇÃO? QUEM
          VENDEU? ALGO PREOCUPANTE? ANÁLISE ON CHAIN
        </h4>
      </div>
      
      <ProgressBar />
      <Line />

      <div className='statu'>
        <BsCameraVideoFill size={20} color="#000"/>
        <h4>
          FICANDO MILIONÁRIO COM SHIBA INU! Investi apenas R$100!
          Eis Como investir
        </h4>
      </div>


      <ProgressBar />
      <Line />

      <span className='title'>
        <BsPersonSquare size={20} color="#000"/>
        <p>Você tem 4 Comentaristas no seu time</p>
      </span>

      <div className='row'>
        <div className='cometario_Admin'> 
          <div className='cometario_profile'>
             <img src={Avatar}/>
             <h1>87.452</h1>
             <p>Palavras</p>
             <span>2  <BsTrophyFill size={15} color="#00a4ef"/></span>
             
          </div>
          <div className='cometario_description'>
              <h1>Tony (Diretor) escreveu:</h1>
              <p>
                987 Palavras HOJE, 1.129 ONTEM... <br/>
                Completou um total de 28 CENAS , 18.234 Comentários <br/>
                Falta escrever 28 comentários para concluir a meta 
              </p>

              <div className='comentario_progressBar'>
                  <div>
                      <span>50%</span>
                  </div>
              </div>

              <div className='comentario_statu'>
                <BsCameraVideoFill size={20} color="#000"/>
                <h4>
                  COMPREI 100 REAIS EM BITCOIN NA PRÁTICA |
                  Investindo em BTC DO ZERO!
                </h4>
              </div>

              <div className='comentario_statu'>
                <BsTrophyFill size={20} color="#000"/>
                <h4>
                  COMPREI 100 REAIS EM BITCOIN NA PRÁTICA |
                  Investindo em BTC DO ZERO!
                </h4>
              </div>


          </div>
        </div>

        <div className='cometario'> 
          <div className='cometario_profile'>
             <img src={Avatar}/>
             <h1>87.452</h1>
             <p>Palavras</p>
             <span>2  <BsTrophyFill size={15} color="#00a4ef"/></span>
             
          </div>
          <div className='cometario_description'>
              <h1>Eduado escreveu:</h1>
              <p>
                987 Palavras HOJE, 1.129 ONTEM... <br/>
                Completou um total de 28 CENAS , 18.234 Comentários <br/>
                Falta escrever 12 comentários para concluir a meta 
              </p>

              <div className='comentario_progressBar'>
                  <div>
                      <span>50%</span>
                  </div>
              </div>

              <div className='comentario_statu'>
                <BsCameraVideoFill size={20} color="#000"/>
                <h4>
                  COMPREI 100 REAIS EM BITCOIN NA PRÁTICA |
                  Investindo em BTC DO ZERO!
                </h4>
              </div>

              <div className='comentario_statu'>
                <BsTrophyFill size={20} color="#000"/>
                <h4>
                  VOCES PEDIRAM E EU FIZ! GRAVEI UM VIDEO
                  ENSINANDO COMO COMPRAR 3HAS
                </h4>
              </div>


          </div>
        </div>

        <div className='cometario'> 
          <div className='cometario_profile'>
             <img src={Avatar}/>
             <h1>87.452</h1>
             <p>Palavras</p>
             <span>2  <BsTrophyFill size={15} color="#00a4ef"/></span>
             
          </div>
          <div className='cometario_description'>
              <h1>Monica escreveu:</h1>
              <p>
                987 Palavras HOJE, 1.129 ONTEM... <br/>
                Completou um total de 28 CENAS , 18.234 Comentários <br/>
                Falta escrever 28 comentários para concluir a meta 
              </p>

              <div className='comentario_progressBar'>
                  <div>
                      <span>50%</span>
                  </div>
              </div>

              <div className='comentario_statu'>
                <BsCameraVideoFill size={20} color="#000"/>
                <h4>
                  COMPREI 100 REAIS EM BITCOIN NA PRÁTICA |
                  Investindo em BTC DO ZERO!
                </h4>
              </div>

              <div className='comentario_statu'>
                <BsTrophyFill size={20} color="#000"/>
                <h4>
                VOCES PEDIRAM E EU FIZ! GRAVEI UM VIDEO
                ENSINANDO COMO COMPRAR 3HAS
                </h4>
              </div>


          </div>
        </div>
        
      </div>
      


      

      
      

   


      

      
    </Wrapper>
  );
}
