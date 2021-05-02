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

                    <span>or</span>

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
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

    input {
        width: 50%;
        height: 2rem;
        margin: 0.5rem 0;
    }

    button {
        width: 51%;
        height: 3rem;
        margin: 1rem 0;
        border: none;
        border-radius: 3px;
        background-color: #0066FF;
        color: #fff;
        font-weight: bold;
    }

    button:hover {
        background-color: transparent;
        border: 1px solid #0066FF;
        color: #0066FF;
        transition: 0.5s;
    }
`

export default CreateQuestionView