import React from 'react';
import HomeBurger from '../../assert/homeBurger.svg'

import Conteiner from '../../components/Conteiner';
import H1 from '../../components/Title'
import ConteinerItens from '../../components/ConteinerItens';

import {
  Image,
} from "./styles";

function Home() {
  return (
    <Conteiner>
      <Image alt='log-imagem-homeBurger' src={HomeBurger}/>
      <H1>Faça seu pedido!</H1>
      <ConteinerItens>
      </ConteinerItens>
    </Conteiner>
  );
}

export default Home;