import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductList from './ProductList'

const Products = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-4">
          <FilterSection/>
        </div>
        <div className="col-lg-8">
          <div className="row sort-filter"> <Sort/> </div>
          <div className="row main-product"> <ProductList/> </div>
        </div>
      </div>
    </div>
  )
}

export default Products
