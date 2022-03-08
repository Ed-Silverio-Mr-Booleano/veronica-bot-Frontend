import React from 'react';
import {Link} from 'react-router-dom';

import { Wrapper, Content } from './style';
import logo from '../../assets/images/logo.png';

export default function SignIn() {
  return (
    <Wrapper>

      <Content>
        <img src={logo} />

        <form>
          
          <input type="email" placeholder="Usuario" />
          <input type="password" placeholder="Sua senha"/>
          <Link>Esqueci a senha!</Link>

          <Link to="/dashboard">
            <button>Entar</button>
          </Link>
          
        </form>
      </Content>
     
    </Wrapper>
  );
}
