import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/'

import Question from '../../components/Question'

const DashboardView = () => {
    const dispatch = useDispatch()
    const questions = useSelector((state) => state.questions.data)
    
    useEffect(() => {
        console.log('*** DASHBOARD MOUNTED ***')
        dispatch(actions.loadAppData())
    }, [])
    
    return (
        <>
        <Container>
            <Tabs>
                <div>Unanswered</div>
                <div>Answered</div>
            </Tabs>

            <Feed>
                {questions.map(question => (
                    <Question 
                    key={question.id} 
                    id={question.id}
                    author={question.author}
                    timestamp={question.timestamp}
                    optionOne={question.optionOne}
                    optionTwo={question.optionTwo}
                    />
                ))}
            </Feed>
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
    border: 1px solid black;
`

const Tabs = styled.div`
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;

    div {
        width: 10rem;
        height: 100%;
        margin: 0 1rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
`

const Feed = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default DashboardView