import React, { useContext } from 'react'
import { Context } from '../context'
import { useParams } from 'react-router-dom'
import thumbnail from '../assets/images/company-placeholder.jpg'

export default function JobDetails() {
    const { id } = useParams()
    const { state } = useContext(Context)

    const job = state.jobs.find(job => job.id === id)

    return (
        <div className='job-page'>
            <div className='job-page_header'>
                <img src={job.company_logo || thumbnail} alt={job.company} />
                <div className='job-page_header-info'>
                    <div>
                        <h3>{job.company}</h3>
                        <h5><a href={job.company_url} alt={job.company_url}>{job.company}.com</a></h5>
                    </div>
                    <a href={job.company_url} alt={job.company_url}>
                        <button className='secondary-btn'>Company Site</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
