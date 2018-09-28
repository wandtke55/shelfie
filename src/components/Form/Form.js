import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            imageUrl: '',
            product_name: '',
            price: 0
        }
        this.baseState = this.state;
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleImageUrl(value){
        this.setState({imageUrl: value})
    }
    handleProductName(value){
        this.setState({product_name: value})
    }
    handlePrice(value){
        this.setState({price: value})
    }
    handleCancel(){
        this.setState(this.baseState)
    }
    submit(){
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            image: this.state.imageUrl
        };
        this.props.addItem(newItem)
    }
    
    render(){
        return(
            <div className='form'>
                ImageUrl:
                <input type='text'onChange={(e)=> this.handleImageUrl(e.target.value)}/>
                Product Name:
                <input type='text'onChange={(e)=> this.handleProductName(e.target.value)}/>
                Price:
                <input type='text'onChange={(e)=> this.handlePrice(e.target.value)}/>
                <button onClick={(e)=> this.handleCancel(e.target.value)}>Cancel</button>
                <button onClick={()=>this.submit()}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form