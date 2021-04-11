import React, {useContext} from 'react'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const PageShop = () => { 

    const products = useContext(ProductContext)

    return (
        
		<>		
            <header className="heading">
                <h1>Sale on Wedding Dresses</h1>
            </header>

            <ProductFilter />

            <ProductList products={products} />
        </>
      )
}

export default PageShop