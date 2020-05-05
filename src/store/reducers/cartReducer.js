import {
  ADD_PRODUCT_TO_CART,
  DELETE_CART_ITEM,
  CLEAR_CART,
  REMOVE_ONE_CART_ITEM,
} from '../actions/types'
import { toast } from 'react-toastify'

const initialState = {
  cartItemCount: 0,
  cartCost: 0,
  products: {},
}

export default (state = initialState, action) => {
  let cart
  let productId
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      let product = action.payload
      cart = { ...state }

      if (product.productId in state.products) {
        cart.products[product.productId].quantity++
        cart.cartCost += product.productPrice
        cart.cartItemCount++
      } else {
        cart.products[product.productId] = { ...product, quantity: 1 }
        cart.cartCost += product.productPrice
        cart.cartItemCount++
      }
      toast.success('Item added to cart.')
      return { ...cart }
    case DELETE_CART_ITEM:
      productId = action.payload
      cart = { ...state }
      cart.cartItemCount -= cart.products[productId].quantity
      cart.cartCost -=
        cart.products[productId].productPrice *
        cart.products[productId].quantity
      delete cart.products[productId]
      toast.error('Item removed from cart')
      return cart
    case REMOVE_ONE_CART_ITEM:
      productId = action.payload
      cart = { ...state }
      cart.cartItemCount--
      cart.products[productId].quantity--
      cart.cartCost -= cart.products[productId].productPrice
      if (cart.products[productId].quantity === 0)
        delete cart.products[productId]
      return cart
    case CLEAR_CART:
      return { ...state, products: {}, cartCost: 0, cartItemCount: 0 }
    default:
      return state
  }
}
