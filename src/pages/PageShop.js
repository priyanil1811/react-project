import React, {useContext, useEffect, useState} from 'react'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const PageShop = () => { 

    const products = useContext(ProductContext)
    const [productResult, setProductResult] = useState(products)

    const [filters, setFilters] = useState({
      query: ``,
      colors: [],
      size: [],
      fabric: `all`,
      sortBy: `none`
    })

    useEffect(() => {
    
      // Creat a clone Array
      let filteredProducts = products;
  
      // Check all the filters
      if (filters.query)
        filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(filters.query.toLowerCase().trim()))
      if (filters.colors.length !== 0) {
        
        filteredProducts = filteredProducts.filter((prod) => filters.colors.some((clr) => prod.colors.includes(String(clr)) ) )
      }

      if (filters.size.length !== 0) {
        
        filteredProducts = filteredProducts.filter((prod) => filters.size.some((sz) => prod.size.includes(String(sz)) ) )
      }
        
      console.log(filters);
      // Sort if appropriate
      switch (filters.sortBy) {
        case `price-high`:
          filteredProducts.sort((a, b) => a.newPrice - b.newPrice)
          break;
        case `price-low`:
          filteredProducts.sort((a, b) => b.newPrice - a.newPrice)
          break;
      }
  
      // Assign the filtered products to the result state
      setProductResult(filteredProducts)
  
    }, [filters])


    return (
        
		<>		
            <header className="heading">
                <h1>Sale on Wedding Dresses</h1>
            </header>

            <ProductFilter filters={filters} setFilters={setFilters} />

            <ProductList products={productResult} />
        </>
      )
}

export default PageShop