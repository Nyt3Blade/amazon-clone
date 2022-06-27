import React from 'react'
import "./Product.css";
import GradeIcon from '@mui/icons-material/Grade';

function Product(title, image, price, rating) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'> 
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                <p>"</p>{Array(rating).fill().map((_,i)=> (<GradeIcon style={{ color: "rgb(255, 200, 0)" }} />))}<p>"</p>
            </div>
        </div>
        <img src="https://cdn.pixabay.com/photo/2017/05/15/17/43/cup-2315563__340.jpg" alt="coffeeMugImage"></img>
        <button className="product__button">Add To Basket</button>
    </div>
  )
}

export default Product