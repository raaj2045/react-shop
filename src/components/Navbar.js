import React from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ cart }) => {
  let location = useLocation()

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          React Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li
              className={`nav-item ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              className={`nav-item nav-item ${
                location.pathname === '/cart' ? 'active' : ''
              }`}
            >
              <Link className="nav-link " to="/cart">
                <span style={{ paddingRight: '10px' }}>Cart</span>
                <ion-icon name="basket"></ion-icon>
                {cart.cartItemCount.toString()}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const mapStatetoProps = (state) => {
  return { cart: state.cart }
}
export default connect(mapStatetoProps, null)(Navbar)
