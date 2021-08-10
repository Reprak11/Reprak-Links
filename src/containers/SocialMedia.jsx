import React from 'react'

import MediaCard from '../components/MediaCard'

import logoGithub from '../assets/github-logo.svg'
import logoInstagram from '../assets/instagram-logo.svg'
import logoTiktok from '../assets/tiktok-logo.svg'
import logoTwitch from '../assets/twitch-logo.svg'
import logoTwitter from '../assets/twitter-logo.svg'

const SocialMedia = () => {
    return( 
        <div className="social-media">
            <MediaCard name="github" logo={logoGithub} />
            <MediaCard name="instagram" logo={logoInstagram} />
            <MediaCard name="tiktok" logo={logoTiktok} />
            <MediaCard name="twitch" logo={logoTwitch} />
            <MediaCard name="twitter" logo={logoTwitter} />
        </div>
    )
}

export default SocialMedia