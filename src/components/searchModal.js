// import React from 'react'

export default function Modal({ setModal, filterByParams }) {

    const searchIcon = new URL('../assets/images/icon-search.svg', import.meta.url)
    const locationIcon = new URL('../assets/images/icon-location.svg', import.meta.url)

    return (
        <div className='overlay'>
            <div className='modal'>
                <div className='modal-header'>
                    <h3>Filter</h3>
                    <button className='btn' onClick={() => setModal(false)}>
                        X
                    </button>
                </div>
                <form className='form' onSubmit={e => e.preventDefault()} >
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
                    </div>
                    <button type='button' className='btn' onClick={() => setModal(false)}>Search</button>
                </form>
            </div>
        </div >
    )
}