import React, { Component } from 'react';
import {storeProducts , detailProduct} from './data'

const cnxt = React.createContext();

export class Cnxtprovider extends Component {
     state= {
         products : [],
         productDetail: detailProduct,
         cart: [],
         modalOpen: false,
         modalProduct: detailProduct,
         cartSubtotal: 0,
         cartTax: 0,
         cartTotal: 0
     }
// to prevent editing in the original data
    setProduct = () =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem]
            })
        this.setState(()=>{
            return { products: tempProducts}
        })
    }
    componentDidMount=()=>{
        this.setProduct();
    }
     getItem = id =>{
       const product = this.state.products.find( item => item.id === id );
        return product;
     }
     handleDetails= id=>{
        const product = this.getItem(id);
        this.setState({
            productDetail : product
        })
        
     }
     handleCart = id=>{
        let tempProduct = this.state.products;
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({
            products : tempProduct,
            cart:[...this.state.cart,product]
            
        }, ()=> this.addTotals())
        
     }
    openModal = id =>{
        const product = this.getItem(id);
        this.setState({
            modalOpen : true,
            modalProduct:product
        })
    }
    closeModal = () =>{
        this.setState({modalOpen : false})
    }
    increment = (id) =>{
        let tempCart = [...this.state.cart];
        let selected = tempCart.find(item=> item.id === id);
        let index = tempCart.indexOf(selected);
        let product = tempCart[index];
        product.count +=1;
        product.total = product.count * product.price;

        this.setState({
            cart : [...tempCart]
        },
        ()=> this.addTotals()
        )        
    }
    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        let selected = tempCart.find(item=> item.id === id);
        let index = tempCart.indexOf(selected);
        let product = tempCart[index];
        product.count -=1;

        if(product.count === 0 ){
            this.removeItem(id)
        }
        else{
            product.total = product.count * product.price;

            this.setState({
                cart : [...tempCart]
            },
            ()=> this.addTotals()
            )   
        }
            
    }
    removeItem = (id) =>{
        let tempProduct = [...this.state.products];
        const tempCart = this.state.cart.filter(item => item.id !== id);
        let index = tempProduct.indexOf(this.getItem(id));
        let removedProduct = tempProduct[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0
        this.setState({
            cart : tempCart
        },
        ()=> this.addTotals()
        )
    }
    clearCart = (id) =>{
        this.setState({
            cart: []
        },()=>{
            this.setProduct();
            this.addTotals();
        })
    }
    addTotals = ()=>{
        let subtotal = 0;
        this.state.cart.map(item => subtotal += item.total);
        const tempTax = subtotal * 0.14;
        const tax = tempTax.toFixed(2)
        const total = tax + subtotal;
        this.setState({
            cartSubtotal: subtotal,
            cartTax: tax,
            cartTotal: total
        })
    }
    
    render(){
        return (
            <cnxt.Provider value={{
            ...this.state,
            handleDetails: this.handleDetails,
            handleCart: this.handleCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart
            }}>
                {this.props.children}
            </cnxt.Provider>
        )
    }
}

 export const Cnxtconsumer = cnxt.Consumer