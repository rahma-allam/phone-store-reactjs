import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css';
import PropTypes from 'prop-types';
import { Cnxtconsumer } from '../../Context';
    
export default function Product(props) {
  const {id, title, img, price,inCart} = props.product;
    return (
      <>
       <div className='col-9 col-lg-3 col-md-6 mx-auto my-3'>
         <div className={`${styles.card} card my-2`}>
           <Cnxtconsumer>
             {value => (
               <div className={`${styles.imgContainer} p-1 `} onClick={()=>value.handleDetails(id)}>
               <Link to='/details'>
                 <img src={img} className={`${styles.cardImg} img-fluid `} alt='product' width="200px" height="200px"/>
               </Link>
            
           <button className={`${styles.cardBtn}`} disabled={inCart?true:false} 
           onClick={()=>
           { value.handleCart(id);
            value.openModal(id);}
           }>
             {inCart? "in cart" : <i className='fas fa-cart-plus'></i>}
           </button>
         </div>
             )}
          
          </Cnxtconsumer>
          <div className= {`card-footer d-flex justify-content-between ${styles.cardFooter} `}>
            <p className=' mb-0'>{title} </p>
            <h5 className='text-blue font-italic  mb-0'><span className='me-1'>$</span>{price}</h5>
           </div>

         </div>
       </div>
      </>
    )
  }
 // making sure of data types 
  Product.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
    }).isRequired
  }