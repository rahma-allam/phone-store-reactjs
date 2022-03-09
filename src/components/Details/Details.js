import React from 'react'
import { Link } from 'react-router-dom';
import { Cnxtconsumer } from '../../Context';
import styles from './Details.module.css';

export default function Details() {
    return (
        <Cnxtconsumer>
            {(value )=>{
                const {id,title,company,img,price,inCart,info} = value.productDetail;

                return(
                    <div className='container'>
                        {/* product title */}
                        <div className="row ">
                           <div className='col-10 mx-auto text-blue text-center my-5'>
                               <h1>{title}</h1>
                           </div>
                        </div>
                        {/* product info */}
                        <div className='row'>
                            <div className='col-md-6 col-10 mx-auto '>
                            <img src={img} alt='product img ' className='img-fluid'/>
                            </div>
                            <div className='col-md-6 col-10 mx-auto text-capitalize '>
                                <h2>model : {title}</h2>
                                <h4 className='text-title text-muted text-uppercase mt-3 mb-2 '>
                                    made by : <span className='text-uppercase'>{company}</span>
                                </h4>
                                <h4 className='text-blue'>
                                    <strong>
                                        price : <span>$</span> {price}
                                    </strong>
                                </h4>
                                <p className='fw-bold mt-3 mb-2'>
                                    some info about product : 
                                </p>
                                <p className='text-muted lead '>{info}</p>
                                <Link to="/">
                                    <button className={styles.backBtn}>back to products</button>
                                </Link>
                                <button  
                                className={`${styles.cartBtn} ms-3 my-2`} 
                                disabled={inCart?true:false}
                                onClick={()=> {
                                    value.handleCart(id)
                                    value.openModal(id)
                                    }} >
                                    {inCart? "in cart" : "add to cart"}
                                </button>
                            </div>
                        </div>
                
                    </div>
                )
            }}
        </Cnxtconsumer>
    )
}
