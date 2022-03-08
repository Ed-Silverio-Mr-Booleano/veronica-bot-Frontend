import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

export default function Header() {
  return (
    <Container>
            <nav>
                <li>exemplo@gmail.com</li>
                <li>Configuração</li>
               
                <li to="/">Sair</li>
            </nav>
    </Container>
  );
}
