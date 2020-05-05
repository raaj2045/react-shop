import React from 'react'
import { connect } from 'react-redux'
import { addProductToCart } from '../store/actions/cartActions'
import { Link } from 'react-router-dom'

function ProductItemCard({ product, addProductToCart }) {
  return (
    <figure className="card card-product" style={{ marginLeft: '30px' }}>
      <Link to={`/products/${product.productId}`}>
        <div className="img-wrap">
          <img src={product.productImage} alt={product.productName} />
        </div>
      </Link>
      <Link to={`/products/${product.productId}`}>
        <figcaption className="info-wrap">
          <h4 className="title">{product.productName}</h4>
          <p className="desc">Some small description goes here</p>
        </figcaption>
      </Link>
      <div className="bottom-wrap">
        <span
          onClick={() => {
            addProductToCart(product)
          }}
          className="btn btn-sm btn-primary float-right"
        >
          Add to Cart
        </span>
        <div className="price-wrap h5">
          <span className="price-new">{product.productPrice.toString()} ₹</span>
        </div>
      </div>
    </figure>
  )
}

export default connect(null, { addProductToCart })(ProductItemCard)
