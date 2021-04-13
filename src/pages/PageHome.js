import React from 'react'

const PageHome = () => {

  const productImg = require(`img/banner.png`).default;

  return (
    <>
      <img src={productImg} alt="Product Image" />
      {/* <h1>Welcome to our shop!</h1> */}
    </>
  )
}

export default PageHome