import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID } from '../actions/types'

const initialState = {
  products: [],
  product: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload }
    case FETCH_PRODUCT_BY_ID:
      return { ...state, product: action.payload }
    default:
      return state
  }
}
