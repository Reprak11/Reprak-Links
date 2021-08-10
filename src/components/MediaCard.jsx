import React from 'react'


const MediaCard = ({name,logo}) => {
    return( 
        <div className="media-card">
            <h1 className="card-title">{name}</h1>
            <img className="card-logo" src={logo} alt={name} />
            <button className="card-button">Follow Me</button>
        </div>
    )
}

export default MediaCard