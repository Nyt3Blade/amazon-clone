import React from 'react'
import "./Product.css";
import GradeIcon from '@mui/icons-material/Grade';

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'> 
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (
                    <GradeIcon key={i} style={{ color: "rgb(255, 200, 0)" }} />
                ))}
            </div>
        </div>
        <img src={image} alt={title} />
        <button className="product__button">Add To Basket</button>
    </div>
  )
}

export default Product