import React from 'react'

const OrderListItem = ({ item, cartCost }) => {
  return (
    <div className="row" style={{ marginBottom: '5%' }}>
      <div className="col-2 col-sm-3 col-xs-3">
        <img
          src={item.productImage}
          alt=""
          width="100%"
          style={{ borderRadius: '12px' }}
        />
      </div>
      <div
        className="col-4 col-sm-3"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '5%',
        }}
      >
        <div className="row white-text">
          <span style={{ fontSize: '1.2em' }}>{item.productName}</span>
        </div>
        <div className="row white-text">
          <span>Quantity: {item.quantity}</span>
        </div>
      </div>
      <div className="white-text col-6" style={{ textAlign: 'center' }}>
        {item.productPrice * item.quantity} ₹
      </div>
    </div>
  )
}

export default OrderListItem
