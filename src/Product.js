import React from 'react'
import "./Product.css";
import GradeIcon from '@mui/icons-material/Grade';

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>The product info</p>
            <p className='product__price'> 
                <small>$</small>
                <strong>0.00</strong>
            </p>
            <div className='product__rating'>
                <p>"</p><GradeIcon style={{ color: "rgb(255, 200, 0)" }} /><p>"</p>
            </div>
        </div>
    </div>
  )
}

export default Product