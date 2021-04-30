import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/'

import Question from '../../components/Question'

const DashboardView = () => {
    const dispatch = useDispatch()
    const questions = useSelector((state) => state.questions.data)
    const auth = useSelector((state) => state.auth)
    const [tab, setTab] = useState({
        value: 'UNANSWERED'
    })
    
    useEffect(() => {
        console.log('*** DASHBOARD MOUNTED ***')
        dispatch(actions.loadAppData())
        if (localStorage.getItem('authenticatedUser')) {
            let userId = JSON.parse(localStorage.getItem('authenticatedUser')).id
            let username = JSON.parse(localStorage.getItem('authenticatedUser')).name
            dispatch(actions.setAuthenticatedUser(userId, username))
        }
    }, [])

    const toggleTab = (newTab) => {
        setTab({ value: newTab })
    }
    
    return (
        <>
        <Container>
            <Tabs>
                <div onClick={() => toggleTab('UNANSWERED')}>Unanswered</div>
                <div onClick={() => toggleTab('ANSWERED')}>Answered</div>
            </Tabs>

            <Feed>
                {/* if dashboard tab state is set to the default UNANSWERED state then map over all questions and return only questions
                where the currently auth'd user has not voted yet */}
                {tab.value === 'UNANSWERED' && questions.map(question => {
                    if (!question.optionOne.votes.concat(question.optionTwo.votes).includes(auth.userId)) {
                        return (
                            <Question 
                                key={question.id} 
                                id={question.id}
                                author={question.author}
                                timestamp={question.timestamp}
                                optionOne={question.optionOne}
                                optionTwo={question.optionTwo}
                            />
                        )
                    }
                })}

                {/* if dashboard tab state is toggled to ANSWERED then map over all questions and return all questions where
                the auth'd userid is included as a vote */}
                {tab.value === 'ANSWERED' && questions.map(question => {
                    if (question.optionOne.votes.concat(question.optionTwo.votes).includes(auth.userId)) {
                        return (
                            <Question 
                                key={question.id} 
                                id={question.id}
                                author={question.author}
                                timestamp={question.timestamp}
                                optionOne={question.optionOne}
                                optionTwo={question.optionTwo}
                            />
                        )
                    }
}               )}
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