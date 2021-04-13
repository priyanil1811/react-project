import React from 'react'
import 'css/App.css'
import ProductContext from 'contexts/product'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PageShop from 'pages/PageShop'
import PageHome from 'pages/PageHome'
import PageContact from 'pages/PageContact'
import PageAbout from 'pages/PageAbout'
import Page404 from 'pages/Page404'


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
				image: "lehenga-4.jpeg",
				title: "Embroidery Lehenga choli",
				oldPrice: 150.00,
				newPrice: 130.00,
				description: "Blue velvet lehenga choli with zari embroidery work all over. Comes with...",
				rating: '4.0',
				colors: ["Blue", "White", "Orange"]
			},
			{
				id: 5,
				image: "lehenga-5.jpeg",
				title: "Pink N White Lehenga",
				oldPrice: 250.00,
				newPrice: 199.00,
				description: "Authentic beauty can come out of your dressing style with this pink...",
				rating: '4.0',
				colors: ["White", "Red", "Orange"]
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
				image: "lehenga-7.jpeg",
				title: "White N Gold Lehenga Choli",
				oldPrice: 220.00,
				newPrice: 200.00,
				description: "Designer net bridal lehenga choli in white color. Comes with golden border...",
				rating: '3.5',
				colors: ["White", "Red", "Orange"]
			},
			{
				id: 8,
				image: "lehenga-8.jpeg",
				title: "Raw Silk Lehenga",
				oldPrice: 275.00,
				newPrice: 225.00,
				description: "Embroidered Raw Silk Semi-Stitched Lehenga & Unstitched Choli...",
				rating: '4.0',
				colors: ["Orange", "White", "Blue"]
			},
			{
				id: 9,
				image: "lehenga-9.jpeg",
				title: "Red Wedding lehenga",
				oldPrice: 250.00,
				newPrice: 225.00,
				description: "Look super gorgeous in this red colored net bridal lehenga in satin...",
				rating: '4.5',
				colors: ["Red", "Green", "White"]
			},
			{
				id: 10,
				image: "lehenga-10.jpeg",
				title: "Banglori Silk Lehenga choli",
				oldPrice: 150.00,
				newPrice: 130.00,
				description: "Black colour crepe fabric party wear lehenga choli comes with matching...",
				rating: '3.0',
				colors: ["Black", "Blue", "Orange"]
			},
			{
				id: 11,
				image: "lehenga-11.jpeg",
				title: "Black N Yellow Lehenga",
				oldPrice: 225.00,
				newPrice: 199.00,
				description: "Yellow color art silk lehenga has been beautified with stone and thread work...",
				rating: '4.0',
				colors: ["Black", "Red", "Orange"]
			},
			{
				id: 12,
				image: "lehenga-12.jpeg",
				title: "Patch Border Wedding Lehenga",
				oldPrice: 175.00,
				newPrice: 200.00,
				description: "This delightful diva accoutre features unique styling and unusual material...",
				rating: '3.5',
				colors: ["Green", "Red", "Orange"]
			},
			{
				id: 13,
				image: "lehenga-13.jpeg",
				title: "Light Pink N Yellow Lehenga",
				oldPrice: 250.00,
				newPrice: 220.00,
				description: "Light pink and yellow silk a line lehenga with embroidered floral patterns...",
				rating: '4.5',
				colors: ["Yellow", "Red", "Orange"]
			},
			{
				id: 14,
				image: "lehenga-14.jpeg",
				title: "Teal Wedding Lehenga Choli",
				oldPrice: 200.00,
				newPrice: 169.00,
				description: "Gorgeous Teal Lehenga Choli is enhanced with all over Zari and...",
				rating: '3.0',
				colors: ["Green", "Red", "Orange"]
			},
			{
				id: 15,
				image: "lehenga-15.jpeg",
				title: "Blue Embroidered Lehenga",
				oldPrice: 199.00,
				newPrice: 175.00,
				description: "Peacock Blue Embroidered Wedding Lehenga Choli will make you look...",
				rating: '3.0',
				colors: ["Blue", "Green", "Orange"]
			},
			{
				id: 16,
				image: "lehenga-16.jpeg",
				title: "Silk Wedding Lehenga",
				oldPrice: 250.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.5',
				colors: ["Blue", "Green", "Orange"]
			},
			{
				id: 17,
				image: "lehenga-17.jpeg",
				title: "Embroidered A Line Lehenga",
				oldPrice: 220.00,
				newPrice: 199.00,
				description: "Aqua blue art silk a line lehenga with embroidered foliage,floral patterns...",
				rating: '3.5',
				colors: ["Blue", "Green", "Red"]
			},
			{
				id: 18,
				image: "lehenga-18.jpeg",
				title: "Resham Sea Green Lehenga",
				oldPrice: 200.00,
				newPrice: 175.00,
				description: "This sea green net lehenga choli add the sense of elegant and glamorous...",
				rating: '4.0',
				colors: ["Blue", "Black", "Orange"]
			},
			{
				id: 19,
				image: "lehenga-19.jpeg",
				title: "Turquoise Embroidered Lehenga",
				oldPrice: 250.00,
				newPrice: 220.00,
				description: "The Lehenga Choli is weaved together with embroidered motifs sequin work...",
				rating: '4.0',
				colors: ["Orange", "Green", "Blue"]
			},
			{
				id: 20,
				image: "lehenga-20.jpeg",
				title: "Green Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in Green color net bridal lehenga with embroidery work...",
				rating: '3.5',
				colors: ["Green", "Purple", "Orange"]
			}
		];

	return (
		<ProductContext.Provider value={products}>
			<Router>
				<Header />

				<main className="products">
					
					<Switch>
						<Route exact path="/" component={PageHome} />
						<Route path="/about" component={PageAbout} />
						<Route path="/contact" component={PageContact} />
						<Route path="/shop" component={PageShop} />
						<Route path="*" component={Page404} />
					</Switch>

				</main>	
				<Footer />
			</Router>
		</ProductContext.Provider>
	)
} 

export default App