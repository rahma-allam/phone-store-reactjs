import React from 'react'

export default function Title({name,title}) {
    return (
        <div className='row'>
            <div className='col-12 text-capitalize fw-bold my-4  text-center'>
                <h1 className=' text-title'>{name + " "}
                <strong className='text-blue'>{title}</strong>
                </h1>
            </div>
        </div>
    )
}
