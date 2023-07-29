import React, { useContext } from 'react'
import { Context } from '../context'

export default function Jobs() {
    const { state } = useContext(Context)
    const { filteredJobs } = state
    return (
        <div className="jobs">
            {filteredJobs.map(job => (
                <div className="job" key={job.id}>
                    {job.title}
                </div>
            ))}
        </div>
    )
}
