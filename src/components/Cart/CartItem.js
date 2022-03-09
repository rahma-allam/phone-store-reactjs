import React from 'react';
import styles from './Cart.module.css';

function CartItem({item ,value}) {
    return (
     <div className='container-fluid text-center '>
        <div className='row py-3 align-items-center' >
        <div className='col-md-2 mx-auto'>
           <img src={item.img} className='img-fluid' alt='product ' style={{width:"5rem",height:"5rem"}} />
        </div>
        <div className='col-md-2 mx-auto'>
            <span className='d-lg-none'>product :</span>
            <p className='text-uppercase'> {item.title}</p>
        </div>
        <div className='col-md-2 mx-auto'>
        <span className='d-lg-none'>price :</span>
            <p className='text-uppercase'>{item.price} </p>
        </div>
        <div className='col-md-2 mx-auto d-flex align-items-center justify-content-center'>
            <span className={`${styles.blackBtn} btn `} onClick={()=>value.decrement(item.id)}>-</span>
            <span className='m-2'>{item.count}</span>
            <span className={`${styles.blackBtn} btn `} onClick={()=>value.increment(item.id)}>+</span>
        </div>
        <div className='col-md-2 mx-auto'>
            <div className={styles.trashIcon} onClick={()=>value.removeItem(item.id)}>
                <i className='fas fa-trash'></i>
            </div>
        </div>
        <div className='col-md-2 mx-auto'>
            <strong>item total : $ {item.total}</strong>
        </div>
    </div>
    </div>
    )
}

export default CartItem
