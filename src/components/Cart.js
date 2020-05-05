import React from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../store/actions/cartActions'
import { useHistory, Link } from 'react-router-dom'
import CartListItem from './CartListItem'

const Cart = ({ cartItems, cartCost, clearCart }) => {
  let history = useHistory()
  console.log(cartItems)
  if (cartItems.length !== 0) {
    return (
      <div className="container" style={{ marginTop: '5%' }}>
        {cartItems.map((item) => {
          return <CartListItem key={item.productId} cartItem={item} />
        })}
        <div className="row">
          <div className="col-9 white-text" style={{ display: 'flex' }}>
            <h5>Total Price:</h5>
            <h3 style={{ marginLeft: '5%' }}>{cartCost} ₹</h3>
          </div>

          <div className="col-3">
            <button
              className="btn btn-success"
              onClick={() => {
                let items = cartItems
                clearCart()
                history.push({
                  pathname: '/order-confirm',
                  state: { items, cartCost },
                })
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className="container"
        style={{ textAlign: 'center', marginTop: '5%' }}
      >
        <h1 style={{ color: 'white' }}>Cart is empty!</h1>
        <div>
          <Link to="/" className="btn btn-primary">
            Go shopping
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let cartItems = Object.keys(state.cart.products).map((key) => {
    return state.cart.products[key]
  })
  return { cartItems, cartCost: state.cart.cartCost }
}

export default connect(mapStateToProps, { clearCart })(Cart)
