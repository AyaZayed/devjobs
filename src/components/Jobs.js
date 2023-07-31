import React, { useContext, useState } from 'react'
import { Context } from '../context'
import Spinner from './Spinner'
import SearchForm from './SearchForm'
import thumbnail from '../assets/images/company-placeholder.jpg'

export default function Jobs() {
    const { state } = useContext(Context)
    const { filteredJobs, loading } = state

    const defaultPages = 12
    const [jobsPerPage, setJobsPerPage] = useState(defaultPages)

    // how long ago was the job posted
    function timeSince(givenDate) {
        const date = new Date(givenDate)
        const seconds = Math.floor((new Date() - date) / 1000)
        let interval = Math.floor(seconds / 31536000)
        if (interval > 1) {
            return `${interval}y`
        }
        interval = Math.floor(seconds / 2592000)
        if (interval > 1) {
            return `${interval}mo`
        }
        interval = Math.floor(seconds / 86400)
        if (interval > 1) {
            return `${interval}d`
        }
        interval = Math.floor(seconds / 3600)
        if (interval > 1) {
            return `${interval}h`
        }
        interval = Math.floor(seconds / 60)
        if (interval > 1) {
            return `${interval}m`
        }
        return `${Math.floor(seconds)}s`
    }

    return (
        <div className="jobs-page">
            <SearchForm />
            <div className="jobs">
                {loading ? <Spinner /> :
                    filteredJobs.slice(0, jobsPerPage).map(job => {
                        return (
                            <div className="job-card" key={job.id}>
                                <img src={thumbnail} alt={job.company} className='logo' />
                                <div className="job-card-content">
                                    <p className='grey'>{timeSince(job.created_at)} • {job.type}</p>
                                    <h3>{job.title}</h3>
                                    <p className='grey'>{job.company}</p>
                                    <h6 className='country'>{job.location}</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="load-more">
                <button className='btn' disabled={jobsPerPage >= filteredJobs.length ? true : false}
                    onClick={() => setJobsPerPage(jobsPerPage + defaultPages)}>Load More</button>
            </div>
        </div>
    )
}
