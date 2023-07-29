import React, { useContext, useState } from 'react'
import { Context } from '../context'

export default function Jobs() {
    const { state } = useContext(Context)
    const { filteredJobs, loading } = state
    const [currentPage, setCurrentPage] = useState(1)

    const jobsPerPage = 10
    const pages = Math.ceil(filteredJobs.length / jobsPerPage)

    function handleNext() {
        if (currentPage === pages) return
        setCurrentPage(currentPage + 1)
    }

    return (
        <div className="jobs">
            <div className='pagination'>
                <button disabled={currentPage < 2} className='previous-page' onClick={() => setCurrentPage(currentPage - 1)}>
                    before
                </button>
                <h6>{pages} / <span className='current'>{currentPage}</span></h6>
                <button disabled={currentPage == pages} className='next-page' onClick={handleNext}>
                    next
                </button>
            </div>
            {loading ? 'Loading...' :
                filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage).map(job => (
                    <div className="job" key={job.id}>
                        {job.location}
                    </div>
                ))}
        </div>
    )
}
