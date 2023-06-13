import React from 'react';
import OrderBurger from '../../assert/OrderBurger.svg'
import Trash from '../../assert/Trash.svg'

import Conteiner from '../../components/Container';
import Image from '../../components/Image'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  ContainerOrders,
  LabelOrder,
  LabelName,
  ButtonTrash,
} from "./styles";

function Home() {
  function addNewOrder(){}
  const Order = ['1 Coca-Cola, 1 X-Salada']
  const Name = ['Steve Jobs']

  return (
    <Conteiner>
      <Image alt='log-imagem-orderBurger' src={OrderBurger}/>
      <H1>Pedidos</H1>
      <ContainerItens>

        <ul>
          <ContainerOrders>
            <div>
              <LabelOrder>{Order}</LabelOrder>
              <LabelName>{Name}</LabelName>
            </div>
            <div>
              <ButtonTrash>
                <img alt='lata-de-lixo' src={Trash}/>
              </ButtonTrash> 
            </div>
          </ContainerOrders>
        </ul>
        <Button to="/" onClick={addNewOrder}>Voltar</Button>
      </ContainerItens>
    </Conteiner>
  );
}

export default Home;