import React from 'react';
import Header from '../../../components/Header';
import { BsYoutube, BsTrophyFill, BsBullseye,BsChatFill,BsPersonSquare, BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs'
import Line from '../../../components/ComponentLine';

import { Wrapper } from './styles';

export default function CreateCena() {
  return (
    
    <Wrapper>
         <Header />
         <div className='title'>
            <h1>Criador de Cenas</h1>
            <p>Administrador e Diretor Tony</p>
            
        </div>
        <Line />

        <div className='userIcon'>
          <BsYoutube size={35} color="#000"/>
          <span>Qual o tipo de mídia?</span> 
        </div>

        <div> 
          <label>
             <input type="radio"/> Video
          </label>

          <label>
             <input type="radio"/> Live
          </label>

        </div> 

        <div className='likeIcon '>
          <BsYoutube size={35} color="#000"/>
          <span>Qual o link do Video no Youtube?</span> 
        </div>

        <div className='likeYoutube'>
          <span>https://www.youtube.com/watch?v=2qXohbT8k9Y</span> 
        </div>

        <div className='likeIcon'>
          <BsTrophyFill size={16} color="#000"/>
          <input type="checkbox" />
          <span>Este é um vídeo conquista! Vamos agradecer =D</span> 
        </div>

        <div> 
          <label>
          <BsFillHandThumbsUpFill size={16} color="#000"/> <input type="radio"/> Like
          </label>

          <label>
          <BsFillHandThumbsDownFill size={16} color="#000"/> <input type="radio"/> Dislike
          </label>

        </div> 

        <div className='likeIcon'>
          <BsBullseye size={35} color="#000"/> 
        </div>

        <div className='likeYoutube'>
          <p>
            O objetivo dessa cena é fazer o criador de conteúdo
            parecer um cara muito inteligente, elogiar o conteúdo do
            canal, talvez acrescentar um contra ponto, contar uma
            história comovente que colabore com a tese do vídeo, e em
            alguns comentários pedir que ele faça um vídeo sobre a
            SoluçãoX
          </p> 
        </div>

        <div className='userIcon'>
          <BsChatFill size={35} color="#000"/>
          <span>META: Número mínimo de comentários</span> 
        </div>

        <div className='select'>
            <select>
                <option value="grapefruit">5</option>
                <option value="lime">10</option>
                <option value="coconut">25</option>
                <option value="mango">30</option>
            </select>
        </div>

        <div className='userIcon'>
          <BsPersonSquare size={35} color="#000"/>
          <span>Selecione o Comentarista responsável pela Cena</span> 
        </div>

        <div className='select'>
            <select>
                <option value="grapefruit">Eduardo</option>
                <option value="lime">João</option>
                <option value="coconut">Manuel</option>
            </select>
        </div>
        
        <div className='btn'>
             <button>Criar nova cena</button>
        </div>

        
    </Wrapper>

    );
}