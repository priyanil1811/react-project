import React, {useEffect, useState} from 'react'
import firebase from 'util/firebase'
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

	const [products, setProducts] = useState([])

	 useEffect(async () => {
	 	const productData = await firebase.firestore().collection('Products').get()
		
	 	setProducts(productData.docs.reduce((products, doc) => [...products, doc.data()], []))
	 }, [])	

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