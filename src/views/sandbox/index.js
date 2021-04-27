import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'

const Sandbox = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    console.log('checking data: ', data)

    useEffect(() => {
        console.log('*** sandbox mounted ***')
        dispatch(actions.loadAppData())
    }, [])
    
    return (
        <>
            sandbox view
        </>
    )
}

export default Sandbox