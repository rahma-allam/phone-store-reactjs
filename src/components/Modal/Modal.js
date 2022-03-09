import React from 'react'
import { Link } from 'react-router-dom';
import { Cnxtconsumer } from '../../Context';
import styles from './Modal.module.css';

function Modal() {
    return (
        <Cnxtconsumer>
            {(value)=>{
                const {img , title ,price} = value.modalProduct;
                if (!value.modalOpen){
                    return null
                }else{
                    return(
                        <div className={styles.modal}>
                        <div className="container ">
                            <div className="row">
                               <div className=" col-md-4 mx-auto text-capitalize text-center p-5  bg-light ">
                                   <h5>Item added to the cart</h5>
                                   <img className='img-fluid' alt='product img'  src={img} />
                                   <h2>{title}</h2>
                                   <h5 className='text-muted'> price : $ {price}</h5>
                                   <Link to='/'>
                                    <button className={styles.backBtn} onClick={()=>value.closeModal()}>continue shopping</button>
                                   </Link>
                                   <br/>
                                   <Link to='/cart'>
                                    <button className={styles.cartBtn} onClick={()=>value.closeModal()}>go to cart</button>
                                   </Link>
                                   
                               </div>
                            </div>
                        </div>
                        </div>
                    )
                }

            }}
        </Cnxtconsumer>
    )
}

export default Modal
