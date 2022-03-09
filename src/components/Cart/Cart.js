import React from 'react';
import { Cnxtconsumer } from '../../Context';
import Title from '../Title/Title'
import CartCoulmns from './CartCoulmns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';

export default function Cart() {
    return (
        <>
        <Cnxtconsumer>
            {(value)=>{
                if(value.cart.length > 0){
                    return(
                    <>
                    <Title name="your"  title="cart"></Title>
                    <CartCoulmns></CartCoulmns>
                    <CartList value={value}></CartList>
                    <CartTotals value={value}/>
                    </>)
                }else{
                  return  <EmptyCart/>
                }
            }}
        </Cnxtconsumer>
            
           
        </>
    )
}
