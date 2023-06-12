import React from 'react';
import HomeBurger from '../../assert/homeBurger.svg'


import {
  H1,
  Conteiner,
  Image,
} from "./styles";

function Home() {
  return (
    <Conteiner>
      <Image alt='log-imagem-homeBurger' src={HomeBurger}/>
        <H1>Faça seu pedido!</H1>
    </Conteiner>
  );
}

export default Home;