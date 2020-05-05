import React, { useEffect } from 'react'
import ProductItemCard from './ProductItemCard'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/actions/productActions'
const Home = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderProducts = () => {
    return products.map((product) => {
      return <ProductItemCard key={product.productId} product={product} />
    })
  }

  return <div className=" product-container">{renderProducts()}</div>
}

const mapStateToProps = (state) => {
  return state.products
}

export default connect(mapStateToProps, { fetchProducts })(Home)
