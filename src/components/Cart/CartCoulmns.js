import React from 'react'

function CartCoulmns() {
    return (
        <>
            <div className='container-fluid text-center d-none d-lg-block'>
                <div className='row py-3' >
                    <div className='col-md-2 mx-auto'>
                        <p className='text-uppercase'>products</p>
                    </div>
                    <div className='col-md-2 mx-auto'>
                        <p className='text-uppercase'> name of product</p>
                    </div>
                    <div className='col-md-2 mx-auto'>
                        <p className='text-uppercase'>price </p>
                    </div>
                    <div className='col-md-2 mx-auto'>
                        <p className='text-uppercase'>quantitiy  </p>
                    </div>
                    <div className='col-md-2 mx-auto'>
                        <p className='text-uppercase'>remove </p>
                    </div>
                    <div className='col-md-2 mx-auto'>
                        <p className='text-uppercase'>total </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartCoulmns
