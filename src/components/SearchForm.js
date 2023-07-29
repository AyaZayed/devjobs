import React, { useContext } from 'react'
import { Context } from '../context'

export default function SearchForm() {
    const { filterByParams } = useContext(Context)

    return (
        <div className='search-section'>
            <form className='search-form' onSubmit={e => e.preventDefault()}>
                <div className='form-control'>
                    <label htmlFor='title'>Job Title</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        onChange={(e) => filterByParams({ title: e.target.value })}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='location'>Location</label>
                    <input
                        type='text'
                        id='location'
                        name='location'
                        onChange={(e) => filterByParams({ location: e.target.value })}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='fullTime'>Full Time Only</label>
                    <input
                        type='checkbox'
                        id='fullTime'
                        name='fullTime'
                        onChange={(e) => filterByParams({ fullTime: e.target.checked })}
                    />
                </div>
            </form>
        </div>
    )
}
