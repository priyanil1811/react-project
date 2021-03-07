import React from 'react'
import 'css/App.css'
import ProductList from 'components/productList'

const App = () => {
		const products = [
			{
				id: 1,
				image: "lehenga-1.jpeg",
				title: "Classic Red Lehenga Choli",
				oldPrice: 299.00,
				newPrice: 260.00,
				description: "Designer cotton bridal lehenga choli in red color. It comes with silk fabric...",
				rating: '4.5',
				colors: ["Red", "White", "Orange"]
			},
			{
				id: 2,
				image: "lehenga-2.jpg",
				title: "Red Embroidery Lehenga Choli",
				oldPrice: 325.00,
				newPrice: 299.00,
				description: "It is paired with a matching color heavily embroidered cotton choli...",
				rating: '4.5',
				colors: ["Red", "White", "Orange"]
			},
			{
				id: 3,
				image: "lehenga-3.jpg",
				title: "Multicolor Bridal Lehenga Choli",
				oldPrice: 250.00,
				newPrice: 225.00,
				description: "Multicolor silk lehenga comes with a red silk heavily embroidered choli and ...",
				rating: '5.0',
				colors: ["Orange", "Green", "White"]
			},
			{
				id: 4,
				image: "lehenga-4.jpg",
				title: "Embroidery Lehenga choli",
				oldPrice: 150.00,
				newPrice: 130.00,
				description: "Purple velvet lehenga choli with zari embroidery work all over. Comes with...",
				rating: '4.0',
				colors: ["Purple", "White", "Orange"]
			},
			{
				id: 5,
				image: "lehenga-5.jpg",
				title: "Maroon Lehenga Choli",
				oldPrice: 250.00,
				newPrice: 199.00,
				description: "Maroon colored designer embroidered lehenga choli. The choli is made of...",
				rating: '4.0',
				colors: ["Maroon", "Red", "Orange"]
			},
			{
				id: 6,
				image: "lehenga-6.jpg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 7,
				image: "lehenga-1.jpeg",
				title: "Classic Red Lehenga Choli",
				oldPrice: 299.00,
				newPrice: 260.00,
				description: "Designer cotton bridal lehenga choli in red color. It comes with silk fabric...",
				rating: '4.5',
				colors: ["Red", "White", "Orange"]
			},
			{
				id: 8,
				image: "lehenga-2.jpg",
				title: "Red Embroidery Lehenga Choli",
				oldPrice: 325.00,
				newPrice: 299.00,
				description: "It is paired with a matching color heavily embroidered cotton choli...",
				rating: '4.5',
				colors: ["Red", "White", "Orange"]
			},
			{
				id: 9,
				image: "lehenga-3.jpg",
				title: "Multicolor Bridal Lehenga Choli",
				oldPrice: 250.00,
				newPrice: 225.00,
				description: "Multicolor silk lehenga comes with a red silk heavily embroidered choli and ...",
				rating: '5.0',
				colors: ["Orange", "Green", "White"]
			},
			{
				id: 10,
				image: "lehenga-4.jpg",
				title: "Embroidery Lehenga choli",
				oldPrice: 150.00,
				newPrice: 130.00,
				description: "Purple velvet lehenga choli with zari embroidery work all over. Comes with...",
				rating: '4.0',
				colors: ["Purple", "White", "Orange"]
			},
			{
				id: 11,
				image: "lehenga-5.jpg",
				title: "Maroon Lehenga Choli",
				oldPrice: 250.00,
				newPrice: 199.00,
				description: "Maroon colored designer embroidered lehenga choli. The choli is made of...",
				rating: '4.0',
				colors: ["Maroon", "Red", "Orange"]
			},
			{
				id: 12,
				image: "lehenga-6.jpg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			}
		];

	return (
		<>
			<header className="page-header">
				<a href="index.html" className="logo">FASHION</a>

				<input type="checkbox" id="check" />
					<label htmlFor="check" className="nav-toggle">
					<i className="fas fa-bars"></i>
					<i className="fas fa-times"></i>
					</label>

				<nav aria-label="Primary" className="navigation">
					<ul className="menu">
					<li><a href="#">Women</a>
						<ul className="submenu">
						<li><a href="#">Wedding Dresses</a></li>
						<li><a href="#">Party Wear</a></li>
						<li><a href="#">Western Wear</a></li>
						</ul>
					</li>
					<li><a href="#">Men</a></li>
					<li><a href="#">Kids</a></li>
					<li><a href="#">Offers</a></li>
					</ul>
				</nav>

				<form className="search">
					<input type="search" name="find" id="find" placeholder="Search products" />
					<button type="button"><i className="fas fa-search"></i></button>
				</form>

				<ul className="your-products">
					<li><a href="#"><i className="far fa-heart"></i></a></li>
					<li><a href="#"><i className="fas fa-shopping-bag"></i></a></li>
				</ul>
			</header>
						
			<main className="products">
				<header className="heading">
					<h1>Sale on Wedding Dresses</h1>
				</header>

      			<form className="filters">
					<h2>Filters</h2>

					<div className="filter-options">
						<fieldset>
							<legend>Colour</legend>
							<ul className="filter-list">
							<li>
								<label className="container" htmlFor="maroon">Maroon
								<input type="checkbox" name="colour" value="maroon" id="maroon" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="green">Green
								<input type="checkbox" name="colour" value="green" id="green" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="red">Red
								<input type="checkbox" name="colour" value="red" id="red" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="orange">Orange
								<input type="checkbox" name="colour" value="orange" id="orange" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="purple">Purple
								<input type="checkbox" name="colour" value="purple" id="purple" />
								<span className="checkmark"></span>
								</label>
							</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Sizes</legend>
							<ul className="filter-list">
							<li>
								<label className="container" htmlFor="xs">XS
								<input type="checkbox" name="colour" value="xs" id="xs" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="sm">S
								<input type="checkbox" name="colour" value="sm" id="sm" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="md">M
								<input type="checkbox" name="colour" value="md" id="md" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="lg">L
								<input type="checkbox" name="colour" value="lg" id="lg" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="xl">XL
								<input type="checkbox" name="colour" value="xl" id="xl" />
								<span className="checkmark"></span>
								</label>
							</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Fabric</legend>
							<ul className="filter-list">
							<li>
								<label className="container" htmlFor="slik">Slik
								<input type="checkbox" name="colour" value="slik" id="slik" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="net">Net
								<input type="checkbox" name="colour" value="net" id="net" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="cotton">Cotton
								<input type="checkbox" name="colour" value="cotton" id="cotton" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="polyster">Polyster
								<input type="checkbox" name="colour" value="polyster" id="polyster" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="velvet">Velvet
								<input type="checkbox" name="colour" value="velvet" id="velvet" />
								<span className="checkmark"></span>
								</label>
							</li> 
							</ul>
						</fieldset>
					</div>
					<fieldset>
						<label htmlFor="sort">Sort by</label>
						<select name="sort" id="sort">
							<option value="price-high">Price, highest to lowest</option>
							<option value="price-low">Price, lowest to highest</option>
							<option value="newest">Newest releases</option>
						</select>
					</fieldset>
				</form>

      			<ProductList products={products} />

      			<nav aria-label="Pagination" className="pagination">
					<p>1-6 of 23 products found</p>
					<ol className="pages">
					<li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
					<li><a href="#" aria-label="Page 2">2</a></li>
					<li><a href="#" aria-label="Page 3">3</a></li>
					<li><a href="#" aria-label="Page 4">4</a></li>
					<li><a href="#" aria-label="Page 5">5</a></li>
					</ol>
      			</nav>
    		</main>

			<footer className="page-footer">
				<ul className="social">
					<li><a href="http://www.facebook.com" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
					<li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram-square"></i></a></li>
					<li><a href="https://twitter.com" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
				</ul>
				<nav aria-label="Legal">
					<ul className="legal">
						<li><a href="#">Terms of Use</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Accessibility Policy</a></li>
					</ul>
				</nav>
				<p className="copyright">Copyright &copy; 2021 Priyanka Patel All rights reserved.</p>
		  </footer>
	  	</>
		
	)
} 

export default App