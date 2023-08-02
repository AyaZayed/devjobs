import React, { useContext, useState } from 'react'
import { Context } from '../context'

export default function SearchForm() {
    const { filterByParams } = useContext(Context)
    const [mobileMenu, setMobileMenu] = useState(true)

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            setMobileMenu(false)
        }
    })

    return (
        <div className='search-section'>
            <form className='search-form' onSubmit={e => e.preventDefault()} >
                {mobileMenu ?
                    <>
                        <div className='form-control'>
                            <img src={new URL('../assets/images/icon-search.svg', import.meta.url)} alt='search' />
                            <input type='text' id='title' name='title' placeholder='Filter by title...'
                                onChange={(e) => filterByParams({ title: e.target.value })}
                            />
                        </div>
                        <div className='form-control'>
                            <img src={new URL('../assets/images/icon-location.svg', import.meta.url)} alt='location' />
                            <input type='text' id='location' name='location' placeholder='Filter by location...'
                                onChange={(e) => filterByParams({ location: e.target.value })}
                            />
                        </div>
                        <div className='full-time-section form-control'>
                            <input type='checkbox' id='fullTime' name='fullTime'
                                onChange={(e) => filterByParams({ fullTime: e.target.checked })}
                            />
                            <label htmlFor='fullTime'>Full Time Only</label>
                            <button type='submit' className='btn'>Search</button>
                        </div>
                    </>
                    :
                    <div className='form-control'>
                        <input type='text' id='title' name='title' placeholder='Filter by title...'
                            onChange={(e) => filterByParams({ title: e.target.value })}
                        />
                        <button type='submit' className='btn'>
                            <img src={new URL('../assets/images/icon-search-white.svg', import.meta.url)} alt='search' />
                        </button>
                    </div>
                }
            </form>
        </div>
    )
}
