import React from 'react';

const RoundedImage = ({ imageUrl }) => {
    return (
        <div className="rounded-image-container">
            <img src={imageUrl} alt="Rounded" className="rounded-image" />
        </div>
    );
};

export default RoundedImage;
