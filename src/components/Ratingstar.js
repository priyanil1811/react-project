import React from 'react'

const Ratingstar = (rating) => {

    const ratingInfo = rating.rating;
    const ratingNum = ratingInfo.split('.', 2);
    let ratingHtml = '';

    for (let i=0; i<ratingNum[0]; i++) {
        ratingHtml += "<i class='fas fa-star'></i>";
    }

    if(ratingNum[1] == '5') {
        ratingHtml += "<i class='fas fa-star-half-alt'></i>";
    }

    var emptyStarNum = Math.floor(5 - ratingInfo);

    for (let i=0; i<emptyStarNum; i++) {
        ratingHtml += "<i class='far fa-star'></i>";
    }

    return (
        <span dangerouslySetInnerHTML={{ __html: ratingHtml }} />
    )
}

export default Ratingstar