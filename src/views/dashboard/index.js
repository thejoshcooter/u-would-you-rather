import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/'

import QuestionCard from '../../components/QuestionCard'

const DashboardView = () => {
    const dispatch = useDispatch()
    const questions = useSelector((state) => state.questions.data)
    const auth = useSelector((state) => state.auth)
    
    useEffect(() => {
        console.log('*** DASHBOARD MOUNTED ***')
        dispatch(actions.loadAppData())

        let user = localStorage.getItem('authenticatedUser')

        if (user) {
            user = JSON.parse(user)
            console.log('user exists', user)
            dispatch(actions.setAuthenticatedUser(user))
        }
    }, [])
    
    return (
        <>
        <Container>
            {questions && (
                questions.map(question => {
                    return (
                        <QuestionCard 
                            key={question.id}
                            id={question.id}
                            author={question.author}
                            optionOne={question.optionOne}
                            optionTwo={question.optionTwo}
                            timestamp={question.timestamp}
                        />
                    )
                })
            )}
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    height: auto;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`


export default DashboardView