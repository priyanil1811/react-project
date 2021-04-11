import React from 'react'
import 'css/App.css'
import ProductList from 'components/productList'
import ProductFilter from 'components/ProductFilter'
import Header from 'components/Header'
import Footer from 'components/Footer'

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
				image: "lehenga-7.jpeg",
				title: "White and gold Lehenga Choli",
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
				title: "Red wedding lehenga",
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
				title: "Maroon Lehenga Choli",
				oldPrice: 250.00,
				newPrice: 199.00,
				description: "Maroon colored designer embroidered lehenga choli. The choli is made of...",
				rating: '4.0',
				colors: ["Maroon", "Red", "Orange"]
			},
			{
				id: 12,
				image: "lehenga-12.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 13,
				image: "lehenga-13.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 14,
				image: "lehenga-14.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 15,
				image: "lehenga-15.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 16,
				image: "lehenga-16.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 17,
				image: "lehenga-17.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 18,
				image: "lehenga-18.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 19,
				image: "lehenga-19.jpeg",
				title: "Red Net Lehenga Choli",
				oldPrice: 260.00,
				newPrice: 229.00,
				description: "Look beautiful in red color net bridal lehenga with thread embroidery work...",
				rating: '4.0',
				colors: ["Red", "Green", "Orange"]
			},
			{
				id: 20,
				image: "lehenga-20.jpeg",
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
			<Header />
						
			<main className="products">
				
				<header className="heading">
                    <h1>Sale on Wedding Dresses</h1>
                </header>

				<ProductFilter />

      			<ProductList products={products} />

    		</main>

			<Footer />
	  	</>
		
	)
} 

export default App