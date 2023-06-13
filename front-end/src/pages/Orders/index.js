import React from 'react';
import OrderBurger from '../../assert/OrderBurger.svg'

import Conteiner from '../../components/Container';
import Image from '../../components/Image'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'

import {
  Button,
} from "./styles";

function Home() {
  function addNewOrder(){}

  return (
    <Conteiner>
      <Image alt='log-imagem-orderBurger' src={OrderBurger}/>
      <H1>Pedidos</H1>
      <ContainerItens>


        <Button to="/" onClick={addNewOrder}>Voltar</Button>
      </ContainerItens>
    </Conteiner>
  );
}

export default Home;