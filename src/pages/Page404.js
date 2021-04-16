import React from 'react'
import {Link} from 'react-router-dom'
import 'css/Page404.css'

const Page404 = () => {
  return (
    <div className="aboutContainer">
      <h1>Error 404</h1>
      <p>Page not found</p>
      <Link to="/" className="errorBtn">Go back home</Link>
    </div>
  )
}

export default Page404