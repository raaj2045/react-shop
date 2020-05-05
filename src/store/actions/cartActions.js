import {
  ADD_PRODUCT_TO_CART,
  DELETE_CART_ITEM,
  REMOVE_ONE_CART_ITEM,
  CLEAR_CART,
} from './types'

export const addProductToCart = (product) => {
  console.log('add one item')
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product,
    })
  }
}

export const deleteCartItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CART_ITEM,
      payload: id,
    })
  }
}

export const removeOneCartItem = (id) => {
  console.log('remove one item')
  return (dispatch) => {
    dispatch({
      type: REMOVE_ONE_CART_ITEM,
      payload: id,
    })
  }
}

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
    })
  }
}
