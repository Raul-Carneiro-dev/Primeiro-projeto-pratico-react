import React from'react';
import './styles.css';

function Cards() {

    return (
        <div id='cards-container'>
            <div className='cards-content'>
                <div className='card banner-1'>
                    <div className='cards-description'>Jinx</div>
                </div>
                <div className='card banner-2'>
                    <div className='cards-description'>Lux</div>
                </div>
                <div className='card banner-3'>
                    <div className='cards-description'>Yasuo</div>
                </div>
                <div className='card banner-4'>
                    <div className='cards-description'>Blitzcrank</div>
                </div>
            </div>
        </div>
    )
}

export default Cards;