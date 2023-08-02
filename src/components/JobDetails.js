import React, { useContext } from 'react'
import { Context } from '../context'
import { useParams } from 'react-router-dom'
import thumbnail from '../assets/images/company-placeholder.jpg'

export default function JobDetails() {
    const { id } = useParams()
    const { state } = useContext(Context)

    const job = state.jobs.find(job => job.id === id)

    console.log(job)

    if (!job) {
        return (
            <h1>404</h1>
        )
    }

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

    // get how to apply link
    const howToApply = job.how_to_apply
    const howToApplyLink = howToApply.match(/href="([^"]*)/)

    return (
        <>
            <div className='job-page'>
                <div className='job-page_header'>
                    <img src={job.company_logo || thumbnail} alt={job.company} />
                    <div className='row'>
                        <div className='job-page_header-info'>
                            <h4>{job.company}</h4>
                            <h6><a target='_blank' href={job.company_url} alt={job.company_url}>{job.company}.com</a></h6>
                        </div>
                        <a target='_blank' href={job.company_url} alt={job.company_url}>
                            <button className='secondary-btn'>Company Site</button>
                        </a>
                    </div>
                </div>
                <div className='job-page_content'>
                    <div className='job-page_content-header'>
                        <div>
                            <h6 className='grey'>{timeSince(job.created_at)} • {job.type}</h6>
                            <h2>{job.title}</h2>
                            <h6 className='violet'>{job.location}</h6>
                        </div>
                        <a target='_blank' href={howToApplyLink} alt={'how to apply'}>
                            <button className='btn' type='button'>Apply Now</button>
                        </a>
                    </div>
                    <div className='job-page_content-description grey' dangerouslySetInnerHTML={{ __html: job.description }} />
                </div>
            </div>
            <div className='job-page_footer'>
                <div className='job-page_footer-info'>
                    <div>
                        <h4>{job.title}</h4>
                        <h6 className='grey'><a target='_blank' href={job.company_url} alt={job.company_url}>{job.company}.com</a></h6>
                    </div>
                    <a target='_blank' href={howToApplyLink} alt={'how to apply'}>
                        <button className='btn' type='button'>Apply Now</button>
                    </a>
                </div>
            </div>
        </>
    )
}
