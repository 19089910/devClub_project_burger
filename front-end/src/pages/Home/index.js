import React, { useRef, useState } from 'react';
import axios from 'axios';
import HomeBurger from '../../assert/homeBurger.svg'

import Conteiner from '../../components/Container';
import Image from '../../components/Image';
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  InputLabel,
  Input,
} from "./styles";

function Home() {
  const inputOrder = useRef();
  const inputName = useRef();
  const [ clientOrder, setClientOrder] = useState([])

  async function addNewOrder(){
    const {data: NewClientOrder} = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      name: inputName.current.value
    });
    setClientOrder([...clientOrder, NewClientOrder])
  }

  return (
    <Conteiner>
      <Image marginTop={true} alt='log-imagem-homeBurger' src={HomeBurger}/>
      <H1>Faça seu pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='1 Coca-Cola, 1-X Salada'></Input>
    
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='Steve Jobs'></Input>

        <Button isHome={true}  onClick={addNewOrder} to="/pedidos">Novo Pedido</Button>
      </ContainerItens>

    </Conteiner>
  );
}

export default Home;