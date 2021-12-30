import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

import { Container, Content } from './style';

export default function Header() {
  return (
    <Container>
        <Content>
            <nav>
                <a>exemplo@gmail.com</a>
                <a>Configuração</a>
               
                <Link to="/">
                  <a>Sair</a>
                </Link>
            </nav>
        </Content>
    </Container>
  );
}
