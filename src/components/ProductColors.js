import React from 'react'

const ProductColors = (productColors) => {

    let colorsInfo = productColors.productColors;
    let productClrHtml = '';
    let i = 0;
    let checkedParam = '';

    colorsInfo.forEach(color => {

        if(i == 0) {
            checkedParam = 'checked="checked"'
        }
        else {
            checkedParam = '';
        }

        productClrHtml +=  `<label class="container radio-container">${color}
                                <input type="radio" name="colour" value=${color} ${checkedParam} />
                                <span class="checkmark roundmark"></span>
                            </label>`;

        i++;

    });

    return (
        <ul dangerouslySetInnerHTML={{ __html: productClrHtml }} />
    )
}

export default ProductColors