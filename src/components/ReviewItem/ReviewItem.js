import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props
  const { name, img, shipping, quantity, price } = product;
  console.log(props)
  return (
    <div className='review-item'>
      <img src={img} alt="" />
      <div className='review-item-details-container'>
        <div className="review-details" title={name}>
          <p>{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
          <p><span>Price:{price}</span></p>
          <p><span>Shipping:{shipping}</span></p>
          <p><span>Quantity:{quantity}</span></p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
            <FontAwesomeIcon className='font-icon' icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>


  );
};

export default ReviewItem;