import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import 'css/productFilter.css'

const ProductFilter = ({filters, setFilters, search}) => {

	if(search == null || search == undefined)
		search = '';

	const [query, setQuery] = useState(search)
	const history = useHistory()

	const handleColorChange = (event)=>{
		if(filters.colors.includes(event.target.value)) {
			const index = filters.colors.indexOf(event.target.value);
			if (index > -1) {
				filters.colors.splice(index, 1);
			}
		}
		else {
			filters.colors.push(event.target.value)
		}
		
		setFilters({
		  ...filters,
		  colors: filters.colors
		})
	  }

	  const handleSizeChange = (event)=>{
		if(filters.size.includes(event.target.value)) {
			const index = filters.size.indexOf(event.target.value);
			if (index > -1) {
				filters.size.splice(index, 1);
			}
		}
		else {
			filters.size.push(event.target.value)
		}
		
		setFilters({
		  ...filters,
		  size: filters.size
		})
	  }

	  const handleSortChange = (event)=>{
		setFilters({
		  ...filters,
		  sortBy: event.target.value
		})
	  }

	  const handleRatingChange = (event)=>{
		setFilters({
		  ...filters,
		  rating: event.target.value
		})
	  }

	  useEffect(() => {
		const params = new URLSearchParams()
		if (query) {
		  params.append("query", query)
		} else {
		  params.delete("query")
		}

		history.push({search: params.toString()})
	  }, [query, history])

	return (
		<form className="filters">
					<h2>Filters</h2>

					<div className="filter-options">
						<fieldset className="search">
							<input type="search" id="find" placeholder="Search products" value={search} onChange={(event)=>{
								

								 setQuery(event.target.value)

								}} />
						</fieldset>
					</div>
					<div className="filter-options">
						<fieldset>
							<legend>Colour</legend>
							<ul className="filter-list">
							<li>
								<label className="container" htmlFor="green">Green
								<input type="checkbox" name="colour" value="Green" id="green" onClick={handleColorChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="red">Red
								<input type="checkbox" name="colour" value="Red" id="red" onClick={handleColorChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="orange">Orange
								<input type="checkbox" name="colour" value="Orange" id="orange" onClick={handleColorChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="white">White
								<input type="checkbox" name="colour" value="White" id="white" onClick={handleColorChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="black">Black
								<input type="checkbox" name="colour" value="Black" id="black" onClick={handleColorChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="blue">Blue
								<input type="checkbox" name="colour" value="Blue" id="blue" onClick={handleColorChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="yellow">Yellow
								<input type="checkbox" name="colour" value="Yellow" id="yellow" onClick={handleColorChange} />
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
								<input type="checkbox" name="size" value="XS" id="xs" onClick={handleSizeChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="sm">S
								<input type="checkbox" name="size" value="S" id="sm" onClick={handleSizeChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="md">M
								<input type="checkbox" name="size" value="M" id="md" onClick={handleSizeChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="lg">L
								<input type="checkbox" name="size" value="L" id="lg" onClick={handleSizeChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label className="container" htmlFor="xl">XL
								<input type="checkbox" name="size" value="XL" id="xl" onClick={handleSizeChange} />
								<span className="checkmark"></span>
								</label>
							</li>
							</ul>
						</fieldset>
						<fieldset>
							<legend>Rating</legend>
							<ul className="filter-list">
							<li>
								<label className="container radio-container"  htmlFor="1">1+
								<input type="radio" name="rating" value="1" id="1" onClick={handleRatingChange} />
								<span className="checkmark roundmark"></span>
								</label>
							</li>
							<li>
								<label className="container radio-container" htmlFor="2">2+
								<input type="radio" name="rating" value="2" id="2" onClick={handleRatingChange} />
								<span className="checkmark roundmark"></span>
								</label>
							</li>
							<li>
								<label className="container radio-container" htmlFor="3">3+
								<input type="radio" name="rating" value="3" id="3" onClick={handleRatingChange} />
								<span className="checkmark roundmark"></span>
								</label>
							</li>
							<li>
								<label className="container radio-container" htmlFor="4">4+
								<input type="radio" name="rating" value="4" id="4" onClick={handleRatingChange} />
								<span className="checkmark roundmark"></span>
								</label>
							</li>
							<li>
								<label className="container radio-container" htmlFor="5">5
								<input type="radio" name="rating" value="5" id="5" onClick={handleRatingChange} />
								<span className="checkmark roundmark"></span>
								</label>
							</li> 
							</ul>
						</fieldset>
					</div>
					<fieldset>
						<label htmlFor="sort">Sort by</label>
						<select name="sort" id="sort" onChange={handleSortChange}>
							<option value="none">-- Sort by --</option>
							<option value="price-high">Price, highest to lowest</option>
							<option value="price-low">Price, lowest to highest</option>
						</select>
					</fieldset>
				</form>
    )
}

export default ProductFilter