import React from 'react'
import styled from 'styled-components'

const CreateQuestionView = () => {
    return (
        <>
            <Container>
                <QuestionForm>
                    <h3>Create a Question</h3>
                    <span>Would you rather...</span>
                    <input 
                        name='option1'
                        placeholder='enter option 1'
                    />

                    <input 
                        name='option2'
                        placeholder='enter option 2'
                    />

                    <button>Submit</button>
                </QuestionForm>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    height: auto;
    margin: 0 auto;
    margin-top: 25vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const QuestionForm = styled.form`
    width: 40rem;
    height: 30rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid black;
`

export default CreateQuestionView