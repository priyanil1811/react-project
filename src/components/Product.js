import React from 'react'
import Ratingstar from 'components/Ratingstar'
import ProductColors from 'components/ProductColors'
import ProductSize from 'components/ProductSize'
import 'css/product.css'


const Product = (product) => {
    
    const productInfo = product.product;
    const productImg = require(`img/${productInfo.image}`).default;


	return (

        <article className="product">
            <header>
                <img src={productImg} alt="Product Image" />
                <h3>{productInfo.title}</h3>
                <data value={productInfo.newPrice}><del>${productInfo.oldPrice}</del> <ins>${productInfo.newPrice}</ins></data>
                <p>{productInfo.description}</p>
                <a href="#">see more</a>
                <dl>
                    <dd>{productInfo.rating} <Ratingstar rating={productInfo.rating} /></dd>
                </dl>
            </header>
            <form>
                <fieldset>
                    <legend>Colours</legend>
                    <ProductColors productColors={productInfo.colors} />
                </fieldset>
                <fieldset>
                    <legend>Sizes</legend>
                    <ProductSize ProductSize={productInfo.size} />
                </fieldset>
          </form>
            <footer>
                <button type="button"><i className="fas fa-shopping-bag"></i> Add to Bag</button>
                <button type="button"><i className="fab fa-gratipay"></i> Wishlist</button>
            </footer>
        </article>
 
    )
}

export default Product