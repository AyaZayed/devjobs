import React, { useContext, useState } from 'react'
import { Context } from '../context'
import Modal from './searchModal'

export default function SearchForm() {
    const { filterByParams } = useContext(Context)
    const [modal, setModal] = useState(false)

    const searchIcon = new URL('../assets/images/icon-search.svg', import.meta.url)
    const locationIcon = new URL('../assets/images/icon-location.svg', import.meta.url)
    const filterIcon = new URL('../assets/images/icon-filter.svg', import.meta.url)
    const searchIconWhite = new URL('../assets/images/icon-search-white.svg', import.meta.url)

    return (
        <div className='search-section'>
            <form className='search-form' onSubmit={e => e.preventDefault()} >
                <div className='desktop-menu'>
                    <div className='form-control'>
                        <img src={searchIcon} alt='search' />
                        <input type='text' id='title' name='title' placeholder='Filter by title...'
                            onChange={(e) => filterByParams({ title: e.target.value })}
                        />
                    </div>
                    <div className='form-control'>
                        <img src={locationIcon} alt='location' />
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
                </div>
                <div className='mobile-menu'>
                    <div className='form-control'>
                        <input type='text' id='title' name='title' placeholder='Filter by title...'
                            onChange={(e) => filterByParams({ title: e.target.value })}
                        />
                        <img src={filterIcon} alt='search' className='filter-icon'
                            onClick={() => setModal(!modal)}
                        />
                        <button type='submit' className='btn'>
                            <img className='search-icon' src={searchIconWhite} alt='search' />
                        </button>
                    </div>
                </div>
            </form>
            {modal && <Modal filterByParams={filterByParams} setModal={setModal} />}
        </div>
    )
}

