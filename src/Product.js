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
        <img src="https://cdn.pixabay.com/photo/2017/05/15/17/43/cup-2315563__340.jpg" alt="coffeeMugImage"></img>
        <button>Add To Basket</button>
    </div>
  )
}

export default Product