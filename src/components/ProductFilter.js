import React from 'react'

const ProductFilter = ({filters, setFilters}) => {

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

	return (
		<form className="filters">
					<h2>Filters</h2>

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