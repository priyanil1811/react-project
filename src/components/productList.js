import React from 'react'
import { Pagination } from 'antd'
import Product from 'components/product'
const {useState} = React


const ProductList = (products) => {

	const [pageNum, setPageNum] = useState(1)
	const [maxResults, setMaxResults] = useState(8)
    const searchResult = products.products;

	const onPageChange = (current, size) => {
		setPageNum(current)
	}
	
    const productsHtml = searchResult
    .slice((pageNum-1)*maxResults, (pageNum-1)*maxResults+maxResults)
    .map(product => 
        <Product product={product} key={product.id} />
    );

	return (
        <>
            <section className="results">
            <h2 className="subheading">Results</h2>
            {productsHtml}
    
            </section>
            <nav aria-label="Pagination" className="pagination">
            <p>{searchResult.length} products found</p>
            <div className="pages">
                <Pagination id="pagination" current={pageNum} defaultPageSize={maxResults} total={searchResult.length} onChange={onPageChange} />
            </div>
        </nav>
      </>
    )
}

export default ProductList