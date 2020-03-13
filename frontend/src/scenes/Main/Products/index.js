import React from 'react'
import { connect } from 'react-redux'

import Products from './Products'

const ProductsContainer = ({ ...props }) => <Products {...props} />

const putStateToProps = state => ({
  products: state.products.products,
  page: state.pageNav.page,
  settings: state.root.settings
})

export default connect(putStateToProps)(ProductsContainer)
