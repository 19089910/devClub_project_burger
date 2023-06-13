import React from 'react';
import HomeBurger from '../../assert/homeBurger.svg'

import Conteiner from '../../components/Container';
import Image from '../../components/Image';
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'

import {
  InputLabel,
  Input,
  Button,
} from "./styles";

function Home() {
  const inputOrder = [];
  const inputName = [];
  function addNewOrder(){}

  return (
    <Conteiner>
      <Image marginTop={true} alt='log-imagem-homeBurger' src={HomeBurger}/>
      <H1>Faça seu pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placehouder='1 Coca-Cola, 1-X Salada'></Input>
    
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placehouder='Steve Jobs'></Input>

        <Button to="/pedidos" onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>

    </Conteiner>
  );
}

export default Home;