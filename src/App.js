import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: []
    }
    this.addProduct = this.addProduct.bind(this)
  }
componentDidMount(){
  axios.get('/api/inventory')
  .then(res => {
    this.setState({inventory: res.data})
    console.log(res.data)
  }) 
} 
addProduct(body){
  axios.post('/api/products', body)
  .then(res=> {
    this.setState({inventory: res.data})
  })
} 
deleteProduct(id){
  axios.delete(`/api/products/${id}`)
  .then(res=> this.setState({inventory: res.data}))
}

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory}>
         <Product />
        </Dashboard>
        <Form addProduct={this.addProduct}/>
      </div>
    );
  }
}

export default App;
