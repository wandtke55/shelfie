require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = process.env.PORT;
const controller = require('./controller')
const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then((dbInstance)=>{
    app.set('db', dbInstance)
    console.log('We Shelfin Wit Da DB')
}).catch(err=>console.log(err))

app.get('/api/inventory', controller.getAll)

app.post('/api/products', controller.create)

app.delete(`/api/delete_product/:id`, controller.delete_product)

app.listen(port, ()=>{
    console.log(`We Shelfin On Port ${port}`)
})