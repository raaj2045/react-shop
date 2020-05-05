import React from 'react'
import {
  deleteCartItem,
  removeOneCartItem,
  addProductToCart,
} from '../store/actions/cartActions'
import { connect } from 'react-redux'

const CartListItem = (props) => {
  console.log(props)
  return (
    <div className="row" style={{ marginBottom: '5%' }}>
      <div className="col-2 col-sm-3 col-xs-3">
        <img src={props.cartItem.productImage} alt="" width="100%" />
      </div>
      <div className="col-4 col-sm-3">
        <div className="row">
          <span style={{ color: '#ffffff', fontSize: '1.5em' }}>
            {props.cartItem.productName}
          </span>
        </div>
        <div className="row">
          <span style={{ color: '#ffffff' }}>
            Quantity: {props.cartItem.quantity}
          </span>
        </div>
      </div>
      <div
        className="col-2"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          className="row white-text"
          onClick={() => {
            props.addProductToCart({
              productId: props.cartItem.productId,
              productName: props.cartItem.productName,
              productImage: props.cartItem.productImage,
              productPrice: props.cartItem.productPrice,
            })
          }}
        >
          <ion-icon name="arrow-dropup" style={{ fontSize: '2rem' }}></ion-icon>
        </div>
        <div className="row white-text">{props.cartItem.quantity}</div>
        <div
          className="row white-text"
          onClick={() => props.removeOneCartItem(props.cartItem.productId)}
        >
          <ion-icon
            name="arrow-dropdown"
            style={{ fontSize: '2rem' }}
          ></ion-icon>
        </div>
      </div>
      <div
        className="col-3"
        style={{ verticalAlign: 'center', paddingTop: '2%' }}
      >
        <button
          className="btn btn-danger"
          onClick={() => {
            props.deleteCartItem(props.cartItem.productId)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {
  removeOneCartItem,
  deleteCartItem,
  addProductToCart,
})(CartListItem)
