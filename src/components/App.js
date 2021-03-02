import React from 'react'
import '../css/App.css'
import test from 'img/test.jpg'

const App = () => {
	return (
		<>
			<h1>Hello, World!</h1>
			<img src={test} alt="Just a test image" />
		</>
	)
}

export default App