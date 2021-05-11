import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as actions from '../redux/actions'

const Poll = ({ id, author, optionOne, optionTwo }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.auth.id)

    const onVote = (user, qid, answer) => {
        dispatch(actions.saveAnswer(user, qid, answer))
        history.push(`/questions/${id}`)
    }
    
    return (
        <>
            <Container>
                <Option>
                    <p>{optionOne.text}</p>
                    <button onClick={() => onVote(user, id, 'optionOne')}>Vote</button>
                </Option>

                <Divider>
                    or
                </Divider>

                <Option>
                    <p>{optionTwo.text}</p>
                    <button onClick={() => onVote(user, id, 'optionTwo')}>Vote</button>
                </Option>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const Divider = styled.div`
    width: 5%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
`

const Option = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    button {
        width: 10rem;
        height: 2rem;
        border-radius: 3px;
        border: 1px solid #0066FF;
        background-color: transparent;
        color: #0066FF;
    }

    button:hover {
        background-color: #0066ff;
        color: #fff;
        transition: 0.5s;
    }
`

export default Poll