import React from 'react'

import MediaCard from '../components/MediaCard'

import logoGithub from '../assets/github-logo.svg'
import logoInstagram from '../assets/instagram-logo.svg'
import logoTiktok from '../assets/tiktok-logo3.svg'
import logoTwitch from '../assets/twitch-logo.svg'
import logoTwitter from '../assets/twitter-logo.svg'

const SocialMedia = () => {
    return( 
        <div className="social-media">
            <MediaCard name="github" urlSocial='https://github.com/Reprak11' logo={logoGithub} classLogo='gitLogo'/>
            <MediaCard name="instagram" urlSocial='https://www.instagram.com/reprak_11/' logo={logoInstagram} classLogo='insLogo'/>
            <MediaCard name="tiktok" urlSocial='https://www.tiktok.com/@reprak11' logo={logoTiktok} classLogo='tikLogo'/>
            <MediaCard name="twitch" urlSocial='https://www.twitch.tv/reprak11' logo={logoTwitch} classLogo='twitchLogo'/>
            <MediaCard name="twitter" urlSocial='https://twitter.com/reprak11' logo={logoTwitter} classLogo='twitterLogo'/>
        </div>
    )
}

export default SocialMedia