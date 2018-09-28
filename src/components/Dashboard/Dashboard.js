import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component{
    
    render(){
        let inventory = this.props.inventory.map((e, index)=>{
            return(
                <Product key ={index} products={e} />
            )
        })
        return(
            <div>
                <h1>Dashboard</h1>
              {inventory}
            </div>
        )
    }
}

export default Dashboard