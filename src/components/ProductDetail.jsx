import React from 'react'
import { useParams } from 'react-router-dom';
import DATA from '../Data';

const ProductDetail = () => {
    const priod = useParams();
    const proDetail = DATA.filter(x => x.id == priod.id)
    const product = proDetail[0];
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
                      <button className='btn btn-outline-primary my-3' >Add to Cart</button>
                  </div>
              </div>
        </div>  
    </>
  )
}

export default ProductDetail