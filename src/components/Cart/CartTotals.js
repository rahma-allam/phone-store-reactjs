import React from 'react'
import { Link } from 'react-router-dom'

function CartTotals({value}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 text-capitalize ms-auto text-end me-5'>
                    <Link to='/'>
                    <button className='btn btn-outline-danger  text-uppercase m-3 ' onClick={()=>clearCart()}>clear cart</button>
                    </Link>
                    
                    <h5 className='text-uppercase'>
                    <span className='text-title'>
                        sub total : {cartSubtotal}
                    </span>
                    </h5>
                    <h5 className='text-uppercase'>
                    <span className='text-title'>
                        tax : {cartTax}
                    </span>
                    </h5>
                    <h5 className='text-uppercase'>
                    <span className='text-title'>
                       total  : {cartTotal}
                    </span>
                    </h5>
                </div>
            </div>
            
        </div>
    )
}

export default CartTotals
