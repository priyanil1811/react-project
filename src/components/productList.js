import React from 'react'
import Product from 'components/product'

const ProductList = (products) => {

    const productsHtml = products.products.map(product => 
        <Product product={product} key={product.id} />
    );

	return (
		<section className="results">
        <h2 className="subheading">Results</h2>
        {productsHtml}
 
      </section>
    )
}

export default ProductList