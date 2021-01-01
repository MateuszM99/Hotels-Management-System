import React from 'react'
import './style.scss'
import ImageGallery from 'react-image-gallery';


function Hotel_Details() {
    const images = [
       {
        thumbnail: 'http://placehold.it/600/1abc9c',
        original: 'http://placehold.it/600/1abc9c',
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
      },
      {
        thumbnail: 'http://placehold.it/600/1abc9c',
        original: 'http://placehold.it/600/1abc9c',
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
      },
    ];
    
    return (
        <div>
            <h3>Hotel Name</h3>
            <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
            <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
            <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
            <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
            <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
            <ImageGallery
                items={images}
                infinite={true}
                showBullets={true}
                showFullscreenButton={true}
                showThumbnails={true}
                showNav={true}
                thumbnailPosition='bottom'

            />
        </div>
    );
}

export default Hotel_Details
