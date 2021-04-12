import React from 'react'

const ProductFilter = () => {

	return (
		<form className="filters">
					<h2>Filters</h2>

					<div className="filter-options">
						<fieldset>
							<legend>Colour</legend>
							<ul className="filter-list">
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
								<label className="container" htmlFor="white">White
								<input type="checkbox" name="colour" value="white" id="white" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="black">Black
								<input type="checkbox" name="colour" value="black" id="black" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="blue">Blue
								<input type="checkbox" name="colour" value="blue" id="blue" />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="yellow">Yellow
								<input type="checkbox" name="colour" value="yellow" id="yellow" />
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
    )
}

export default ProductFilter