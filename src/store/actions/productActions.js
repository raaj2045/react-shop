import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID } from './types'

let products = [
  {
    productId: 1,
    productName: 'Bag',
    productImage:
      'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-1_large.png?format=jpg&quality=90&v=1530129292',
    productPrice: 700,
  },
  {
    productId: 2,
    productName: 'Shoe',
    productImage:
      'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png?format=jpg&quality=90&v=1530129292',
    productPrice: 1200,
  },
  {
    productId: 3,
    productName: 'Sunglass',
    productImage:
      'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-3_large.png?format=jpg&quality=90&v=1530129292',
    productPrice: 12200,
  },
  {
    productId: 4,
    productName: 'Cap',
    productImage:
      'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-4_large.png?format=jpg&quality=90&v=1530129292',
    productPrice: 5200,
  },
]

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    })
  }
}

export const fetchProductById = (id) => {
  let product = products.filter((prod) => {
    return prod.productId === id
  })

  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCT_BY_ID,
      payload: product[0],
    })
  }
}
