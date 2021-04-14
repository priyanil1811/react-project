import React from 'react'

const ProductSize = (ProductSize) => {

    let sizeInfo = ProductSize.ProductSize;
    let productSzHtml = '';
    let i = 0;
    let checkedParam = '';

    sizeInfo.forEach(size => {

        if(i == 0) {
            checkedParam = 'checked="checked"'
        }
        else {
            checkedParam = '';
        }

        productSzHtml +=    `<label class="container radio-container">${size}
                                <input type="radio" name="size" value=${size} ${checkedParam} />
                                <span class="checkmark roundmark"></span>
                            </label>`;

        i++;

    });

    return (
        <ol dangerouslySetInnerHTML={{ __html: productSzHtml }} />
    )
}

export default ProductSize