import React from 'react';
import { useState } from 'react';


const PhotoGallery = () => {

    return (
        <div id='gallery-body'>
            {/* <div className='container'>
                <br/>
                <h1 id="overview-header-txt">PHOTO GALLERY</h1>
                <br/>
            </div> */}
            <div id="galleryEmbedWrapper">
                <iframe id="galleryEmbed" src='https://mucc.pixieset.com/mucc-test/'></iframe>
            </div>

        </div>
        
    );
}

export default PhotoGallery;