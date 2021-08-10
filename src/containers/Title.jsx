import React from 'react'
import logo from '../assets/logo-simple.PNG'

import Info from '../components/Info'


const Title = () => (
    <div className="title">
        <div className='logo-border'>
            <img className="logo-style" src={logo} alt="#" />
        </div>
        <Info />
    </div>
    
)

export default Title