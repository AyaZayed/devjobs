import React, { useEffect } from 'react'
import { createContext, useReducer, useEffect } from 'react'
import * as JobsData from './data.json'

export const Context = createContext()

const initialState = {
    jobs: [],
    filteredJobs: [],
    loading: true,
    error: null
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload,
                filteredJobs: action.payload,
                loading: false
            }
        case 'FILTER_BY_PARAMS':
            return {
                ...state,
                filteredJobs: action.payload
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        try {
            dispatch({ type: 'SET_JOBS', payload: JobsData })
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error })
        }
    }, [])


    function filterByParams(params) {
        const { name, location, fullTime } = params
        const filteredJobs = state.jobs.filter(job => {
            const nameMatch = job.company.toLowerCase().includes(name.toLowerCase())
            const locationMatch = job.location.toLowerCase().includes(location.toLowerCase())
            const fullTimeMatch = fullTime ? job.contract.toLowerCase() === 'full time' : true
            return nameMatch && locationMatch && fullTimeMatch
        })
        dispatch({ type: 'FILTER_BY_PARAMS', payload: filteredJobs })
    }

    return (
        <Context.Provider value={{ state, filterByParams }}>
            {props.children}
        </Context.Provider>
    )
}
