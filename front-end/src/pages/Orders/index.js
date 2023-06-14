import React,{useState, useEffect} from 'react';
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
import axios from 'axios';

function Home() {

  const [clintOrder, setClientOrder] = useState([]);
  useEffect(() => {
    async function fetchClientOrder(){
      const { data : newClientOrder } = await axios.get("http://localhost:3001/order");
      setClientOrder(newClientOrder)
    }
    fetchClientOrder()
  }, [])

  async function deletClientOrder(cliteOrderId){
    await axios.delete(`http://localhost:3001/order/${cliteOrderId}`)
    
    const newClientOrder = clintOrder.filter( clientOrder => clientOrder.id !== cliteOrderId)
    console.log(newClientOrder)
    setClientOrder(newClientOrder)
  }

  return (
    <Conteiner>
      <Image alt='log-imagem-orderBurger' src={OrderBurger}/>
      <H1>Pedidos</H1>
      <ContainerItens>

        <ul>
          {clintOrder.map((clintOrder)=> (
            <ContainerOrders key={clintOrder.id}>
              <div>
                <LabelOrder>{clintOrder.order}</LabelOrder>
                <LabelName>{clintOrder.name}</LabelName>
              </div>
              <div>
                <ButtonTrash onClick={() => deletClientOrder(clintOrder.id)}>
                  <img alt='lata-de-lixo' src={Trash}/>
                </ButtonTrash> 
              </div>
            </ContainerOrders>
          ))}
        </ul>

        <Button to="/" >Voltar</Button>
      </ContainerItens>
    </Conteiner>
  );
}

export default Home;