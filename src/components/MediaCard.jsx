import React from 'react'


const MediaCard = ({name,logo, classLogo, urlSocial}) => {
    const cardStyle = `media-card ${classLogo}`
    return( 
        <a href={urlSocial} target="_blank" className={cardStyle}>
            <h1 className="card-title">{name}</h1>
            <img className="card-logo" src={logo} alt={name} />
            <button className="card-button">Follow Me</button>
        </a>
    )
}

export default MediaCard