import React from 'react'
import Ratingstar from 'components/Ratingstar'

const Product = (product) => {
    
    const productInfo = product.product;

	return (

        <article className="product">
          <header>
            <img src={"src/img/" + productInfo.image} alt="Product Image" />
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
              <ul>
                <label className="container radio-container">{productInfo.colors.clr1}
                  <input type="radio" name="colour" value={productInfo.colors.clr1} defaultChecked={true} />
                  <span className="checkmark roundmark"></span>
                </label>
                <label className="container radio-container">{productInfo.colors.clr2}
                  <input type="radio" name="colour" value={productInfo.colors.clr2} />
                  <span className="checkmark roundmark"></span>
                </label>
                <label className="container radio-container">{productInfo.colors.clr3}
                  <input type="radio" name="colour" value={productInfo.colors.clr3} />
                  <span className="checkmark roundmark"></span>
                </label>
              </ul>
            </fieldset>
            <fieldset>
              <legend>Sizes</legend>
              <ol>
                <label className="container radio-container">S
                  <input type="radio" name="size" value="s" defaultChecked={true} />
                  <span className="checkmark roundmark"></span>
                </label>
                <label className="container radio-container">M
                  <input type="radio" name="size" value="m" />
                  <span className="checkmark roundmark"></span>
                </label>
                <label className="container radio-container">L
                  <input type="radio" name="size" value="l" />
                  <span className="checkmark roundmark"></span>
                </label>
                <label className="container radio-container">XL
                  <input type="radio" name="size" value="xl" />
                  <span className="checkmark roundmark"></span>
                </label>
              </ol>
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