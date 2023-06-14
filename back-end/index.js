const cors = require('cors');
const uuid = require('uuid');
const port = 3001;
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors())

const ClienteOrder = []

const checkOrdersId = (request, response, next) => {
    const { id } = request.params
    const index = ClienteOrder.findIndex(clienteOrder => clienteOrder.id == id)

    request.orderId = id
    request.orderIndex = index

    if(index < 0){
        return response.status(404).json({error: "order not found"})
    }
    next()
}

app.post('/order', (request, response) =>{
    const { order, name} = request.body
    const clienteOrder = {id:uuid.v4(), order, name}
    ClienteOrder.push(clienteOrder)

    return response.status(201).json(clienteOrder)
})

app.get('/order', (request, response) => {
    return response.status(200).json(ClienteOrder)
})

app.delete('/order/:id', checkOrdersId, (request, response) =>{
    const index = request.orderIndex
    ClienteOrder.splice(index,1)

    return response.status(204).json()
})

app.listen(port, () =>{
    console.log(`🚀 Server stared on port ${port}`)
});
