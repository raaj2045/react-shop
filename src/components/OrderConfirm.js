import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import OrderListItem from './OrderListItem'

const OrderConfirm = () => {
  const location = useLocation()
  const state = location.state
  console.log(state)
  const renderOrderItems = () => {
    return state.items.map((item) => {
      return <OrderListItem key={item.productId} item={item} />
    })
  }
  return (
    <div className="container">
      <div
        className="row"
        style={{ justifyContent: 'center', marginTop: '3%' }}
      >
        <h2 className="white-text">Order Placed</h2>
      </div>
      <div
        className="row"
        style={{
          marginLeft: '20%',
          marginRight: '20%',
          marginTop: '2%',
          marginBottom: '5%',
          backgroundColor: '#007bff',
          borderRadius: '4px',
          paddingLeft: '5%',
          paddingRight: '5%',
          paddingBottom: '2%',
          paddingTop: '2%',
        }}
      >
        <div>
          <div className="row white-text" style={{ marginBottom: '5%' }}>
            <div className="col-6" style={{ textAlign: 'left' }}>
              <h5>Items</h5>
            </div>
            <div className="col-6" style={{ textAlign: 'center' }}>
              <h5>Price</h5>
            </div>
          </div>
          {renderOrderItems()}
          <div className="row white-text" style={{ marginTop: '5%' }}>
            <div className="col-7">
              <h5>Total Price</h5>
            </div>
            <div className="col-5">
              <h4>{state.cartCost} ₹ </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default OrderConfirm
