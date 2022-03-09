import React from 'react';
import Title from '../Title/Title';
import Product from './../Product/Product'
import { Cnxtconsumer } from '../../Context';

export default function ProductList() {    
    return (
        <div className='py-5'>
            <div className='container'>
                <Title name="our" title="products"></Title>
                <div className='row'>
                    
                        <Cnxtconsumer>
                            {(value)=>{
                            
                                return value.products.map((pro)=>{
                                    return <Product key={pro.id} product={pro}></Product>
                                })
                                
                            }}
                        </Cnxtconsumer>
                   
                </div>
            </div>
        </div>
    )
}
