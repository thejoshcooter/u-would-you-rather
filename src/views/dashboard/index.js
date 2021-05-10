import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/'

import QuestionCard from '../../components/QuestionCard'

const DashboardView = () => {
    const dispatch = useDispatch()
    const questions = useSelector((state) => state.questions.data)
    const auth = useSelector((state) => state.auth)
    const answers = useSelector(state => state.auth.answers)
    const [tab, setTab] = useState({ value: 0 })
    
    useEffect(() => {
        console.log('*** DASHBOARD MOUNTED ***')
        dispatch(actions.loadAppData())

        let user = localStorage.getItem('authenticatedUser')

        if (user) {
            user = JSON.parse(user)
            dispatch(actions.setAuthenticatedUser(user))
        }
    }, [])
    
    return (
        <>
        <Container>
            <Tabs>
                <button className={tab.value === 0 ? 'active' : ''} onClick={() => setTab({ value: 0 })}>Unanswered</button>
                <button className={tab.value === 1 ? 'active' : ''} onClick={() => setTab({ value: 1 })}>Answered</button>
            </Tabs>

            {questions && answers && (
                questions.map(question => {
                    if (!Object.keys(answers).includes(question.id) && tab.value === 0) {
                        return (
                            <QuestionCard 
                                key={question.id}
                                id={question.id}
                                author={question.author}
                                optionOne={question.optionOne}
                                optionTwo={question.optionTwo}
                                timestamp={question.timestamp}
                                answered={false}
                            />
                        )
                    } else if (tab.value === 1 && Object.keys(answers).includes(question.id)) {
                        return (
                            <QuestionCard 
                                key={question.id}
                                id={question.id}
                                author={question.author}
                                optionOne={question.optionOne}
                                optionTwo={question.optionTwo}
                                timestamp={question.timestamp}
                                answered={true}
                            />
                        )
                    }
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
const Tabs = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    button {
        width: 10rem;
        height: 2rem;
        border-radius: 3px;
        border: 1px solid #0066FF;
        background-color: transparent;
        color: #0066FF;
        margin: 0 1rem;
    }

    button.active {
        background-color: #0066FF;
        color: #fff;
    }
`

export default DashboardView