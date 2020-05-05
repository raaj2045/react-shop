import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProductById } from '../store/actions/productActions'
import { addProductToCart } from '../store/actions/cartActions'
const Product = (props) => {
  const id = props.match.params.id
  const product = props.product

  useEffect(() => {
    props.fetchProductById(parseInt(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (product) {
    return (
      <div
        className="row"
        style={{ marginLeft: '10%', marginRight: '10%', marginTop: '5%' }}
      >
        <div className="col-sm-12 col-lg-4 col-md-4">
          <img
            src={product.productImage}
            width="100%"
            alt={product.productName}
          />
        </div>
        <div className="col-sm-12 col-lg-8 col-md-8">
          <div>
            <h3 className="white-text">{product.productName}</h3>
          </div>
          <div>
            <h5 className="white-text">Price : {product.productPrice}</h5>
          </div>

          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                props.addProductToCart(product)
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { product: state.products.product }
}
export default connect(mapStateToProps, { fetchProductById, addProductToCart })(
  Product,
)
