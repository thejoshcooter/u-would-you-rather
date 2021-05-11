import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'

const CreateQuestionView = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.id)
    const history = useHistory()

    const [form, setForm] = useState({
        optionOneText: '',
        optionTwoText: '',
        author: null
    })

    const onChange = (e) => {
        setForm({ ...form, author: user, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(actions.createQuestion(form))
        history.push('/dashboard')
    }
    
    return (
        <>
            <Container>
                <QuestionForm onSubmit={onSubmit}>
                    <h3>Create a Question</h3>
                    <span>Would you rather...</span>
                    <input 
                        type='text'
                        name='optionOneText'
                        placeholder='enter option 1'
                        value={form.optionOneText}
                        onChange={onChange}
                    />

                    <span>or</span>

                    <input 
                        type='text'
                        name='optionTwoText'
                        placeholder='enter option 2'
                        value={form.optionTwoText}
                        onChange={onChange}
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