import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useRouteMatch} from 'react-router-dom'

import QuestionCard from '../../components/QuestionCard'
import Error404 from '../404/index'

const QuestionView = () => {
    const questions = useSelector(state => state.questions.data)
    const answers = useSelector(state => state.auth.answers)
    const questionId = useRouteMatch().params.id
    const questionExists = questions.some(question => question.id === questionId)
    console.log('questions: ', questions, 'question exists: ', questionExists)

    return (
        <>
            <Container>
                {questions && questions.map(question => {
                    if (question.id === questionId) {
                        return (
                            <QuestionCard 
                                key={question.id}
                                id={question.id}
                                author={question.author}
                                optionOne={question.optionOne}
                                optionTwo={question.optionTwo}
                                timestamp={question.timestamp}
                                answered={Object.keys(answers).includes(questionId) ? true : false}
                            />
                        )
                    }
                })}

                {questions.length < 1 &&  (
                    <p>loading...</p>
                )}

                {questions.length > 1 && !questionExists && (
                    <Error404 />
                )}
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default QuestionView