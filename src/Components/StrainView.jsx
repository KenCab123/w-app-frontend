import React, { useState, useEffect } from 'react';
import "./StrainView.css"
import weedEmoji from "./assets/weedEmoji.png"


const StrainView = ({strain}) => {
    
    const ratingConvertToEmoji = (rating) => {
        const roundedRating = Math.ceil(rating);
        const emojiStyle = {
            width: "20px", // Adjust the width of the emoji image as needed
            height: "20px", // Adjust the height of the emoji image as needed
            backgroundImage: `url(${weedEmoji})`,
            backgroundRepeat: "repeat-x", // Repeat the image horizontally
            display: "inline-block",
        };
        const emojis = Array(roundedRating).fill().map((_, index) => <span key={index} style={emojiStyle}></span>);
        return emojis;
    };
    const effects = strain.effects
    return (
    <div className="strain-view-wrapper">
        <h1>{strain.name}</h1>
        <img style={{border: "1px solid black", height: "100px", width: "100px"}} src={strain.image} alt="" />
        <ul>
            <h2>Strain Effects</h2>
            {strain.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
            ))}
        </ul>
        <div className='rating'>
        <p>Rating</p>
        <p>{ratingConvertToEmoji(strain.rating)}</p>
        </div>
        <p>THC: {strain.THCContent}</p>
        <p>CBD: {strain.CBDContent}</p>
        <p>{strain.description}</p>

    </div>
    )
}

export default StrainView