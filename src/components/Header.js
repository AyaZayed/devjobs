import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ setTheme }) {
    const logoName = new URL('../assets/images/logo name.svg', import.meta.url)
    const moonSVG = new URL('../assets/images/icon-moon.svg', import.meta.url)
    const sunSVG = new URL('../assets/images/icon-sun.svg', import.meta.url)
    return (
        <header>
            <div className='header-container'>
                <Link to='/' className='logo'>
                    <img src={logoName} alt='logo' />
                </Link>
                <div className='theme-switcher'>
                    <img src={sunSVG} alt='sun' />
                    <label className='switch'>
                        <input type='checkbox' onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} />
                        <span className='slider round'></span>
                    </label>
                    <img src={moonSVG} alt='moon' />
                </div>
            </div>
        </header>
    )
}
