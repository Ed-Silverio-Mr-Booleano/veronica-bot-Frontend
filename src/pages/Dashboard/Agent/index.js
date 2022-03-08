import React from 'react';
import Header from '../../../components/Header';
import { BsPersonFill } from 'react-icons/bs'
import { BsTrophyFill } from 'react-icons/bs'

import Avatar from '../../../assets/images/avatar.jpg';


import { Wrapper } from './styles';

export default function Agent() {
  return (
    <Wrapper>
        <Header />

        <div>
          <h1>Cadastrar novo agente</h1>
          <p>Cadastre novos Diretores e Comentaristas</p>
          <hr/>
        </div>

        <div className='userIcon'>
          <BsPersonFill size={35} color="#000"/>
          <span> Qual classe você deseja cadastrar?</span> 
        </div>

        <div> 
          <label>
             <input type="radio"/> Um Diretor
          </label>

          <label>
             <input type="radio"/> Um Comentarista
          </label>

        </div> 

        <form>
          <label>
            Qual nome de Usuário do Diretor?<input type="text" name="name" />
          </label>

          <label>
            E-mail<input type="email" name="name" />
          </label>

          <label>
            Senha<input type="password" name="name" />
          </label>

        </form>

        <div className='imgProfile'>
             <img src={Avatar}/>
             
            <span>
                <p>Faça Upload de uma foto de perfil</p>
                <input type="file" name="name" />
            </span>
            
        </div>

        <div className='btn'>
          <button>Cadastrar novo Diretor</button>
        </div>

        <div>
          <h1>Diretorias</h1>
          <p>A seguir a lista de todas as diretorias cadastradas</p>
          <hr/>
        </div>

        <div>
             <div className='listDireito'>
               <img src={Avatar}/>

               <span>
                  <h1>Tony - Diretor 
                    <span>2 <BsTrophyFill size={14} color="#000"/></span>
                  </h1>
                  <p>emaildotony@gmail.com</p>
               </span>

               <a>Editar</a>

             </div>

             <div className='listComentador'>
                <img src={Avatar}/>

                <span>
                  <h1>Monica - Comentarista</h1>
                  <p>emaildotony@gmail.com</p>
                </span>

                <a>Editar</a>
             </div>
           
          </div>

        
    </Wrapper>
  );
}
