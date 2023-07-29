import React, { useEffect } from 'react'
import { createContext, useReducer, useEffect } from 'react'
import * as JobsData from './data.json'

export const Context = createContext()

const initialState = {
    jobs: [],
    filteredJobs: [],
    loading: true,
    error: null,
    filters: {
        title: '',
        location: '',
        fullTime: false
    }
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
        const { title, location, fullTime } = params
        const jobs = [...state.jobs]
        //    filter jobs but put brakes if the filters are empty
        const filteredJobs = jobs.filter(job => {
            if (title && !job.title.toLowerCase().includes(title.toLowerCase())) {
                return false
            }
            if (location && !job.location.toLowerCase().includes(location.toLowerCase())) {
                return false
            }
            if (fullTime && !job.type.toLowerCase().includes('full time')) {
                return false
            }
            return true
        })
        dispatch({ type: 'FILTER_BY_PARAMS', payload: filteredJobs })
    }

    return (
        <Context.Provider value={{ state, filterByParams }}>
            {props.children}
        </Context.Provider>
    )
}
