import React from 'react'

import Product from './Product'
import PageNav from '../../../components/PageNav'

const Products = ({ products, settings, page }) => {
  return (
    <div className="col-8 my-content-wrapper">
      <PageNav amountOfProducts={products.length} />
      {products
        ? products.map((product, index) => {
            if (
              index < page * settings.pageLen &&
              index > page * settings.pageLen - settings.pageLen - 1
            ) {
              return <Product product={product} key={index} />
            }
          })
        : 'loading ...'}
    </div>
  )
}

export default Products
