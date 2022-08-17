import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import { useDispatch } from 'react-redux/es/exports';
import { addItem, delItem } from '../redux/actions';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const priod = useParams();
    const proDetail = DATA.filter(x => x.id == priod.id)
    const product = proDetail[0];

    const dispatch = useDispatch();
    const handleCart = (product) => {
        if (cartBtn == "Add to Cart") {
            dispatch(addItem(product));
            setCartBtn("Remove from Cart");
        } else {
                        dispatch(delItem(product));

            setCartBtn("Add to Cart");
        }
    }
  return (
      <>
          <div className='container my-5 py-3'>
              <div className='row'>
                  <div className='col-lg-6 col-md-12    productdetail'>
                      <img src={product.img} alt={product.title} ></img>
                  </div>
                  <div className='col-lg-6 col-md-12  d-flex flex-column justify-content-center '>
                      <h1 className=' fw-bold'>
                          {product.title}
                      </h1>
                      <hr />
                      <h2 className='my-4'>${product.price}</h2>
                      <p className='lead'> {product.desc}</p>
                      <button onClick={() => handleCart(product)} className='btn btn-outline-primary my-3' >{cartBtn }</button>
                  </div>
              </div>
        </div>  
    </>
  )
}

export default ProductDetail