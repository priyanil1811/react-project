import React, {useContext, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const PageShop = () => {

    const params = new URLSearchParams(useLocation().search)
    const query = params.get("query");
    const products = useContext(ProductContext)
    const [productResult, setProductResult] = useState(products)

    const [filters, setFilters] = useState({
      colors: [],
      size: [],
      rating: `all`,
      sortBy: `none`
    })

    useEffect(() => {
      
      
      // Creat a clone Array
      let filteredProducts = [...products];

    
      // Check all the filters
      if (query)
        filteredProducts = filteredProducts.filter((prod) => prod.title.toLowerCase().includes(query.toLowerCase().trim()))
      if (filters.colors.length !== 0) {
        
        filteredProducts = filteredProducts.filter((prod) => filters.colors.some((clr) => prod.colors.includes(String(clr)) ) )
      }

      if (filters.size.length !== 0) {
        
        filteredProducts = filteredProducts.filter((prod) => filters.size.some((sz) => prod.size.includes(String(sz)) ) )
      }

      if (filters.rating !== `all`) {
      filteredProducts = filteredProducts.filter((prod) => Number(prod.rating) >= Number(filters.rating))
      }
      
      
      // Sort if appropriate
      switch (filters.sortBy) {
        case `price-high`:
          filteredProducts.sort((a, b) => b.newPrice - a.newPrice)
          break;
        case `price-low`:
          filteredProducts.sort((a, b) => a.newPrice - b.newPrice)
          break;
      }
      
      // Assign the filtered products to the result state
      setProductResult(filteredProducts)
  
     
    }, [filters, products, query])


    return (
        
		<>		
            <header className="heading">
                <h1>Sale on Wedding Dresses</h1>
            </header>

            <ProductFilter filters={filters} setFilters={setFilters} search={query} />

            <ProductList products={productResult} />
        </>
      )
}

export default PageShop