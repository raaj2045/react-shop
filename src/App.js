import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store/index'
import 'react-toastify/dist/ReactToastify.min.css'
import { toast, ToastPosition } from 'react-toastify'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart'
import OrderConfirm from './components/OrderConfirm'
import Product from './components/Product'
toast.configure({ position: ToastPosition.BOTTOM_RIGHT, autoClose: 1500 })

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order-confirm" component={OrderConfirm} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
