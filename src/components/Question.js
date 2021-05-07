import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions'

const Question = ({ id, author, timestamp, optionOne, optionTwo, tab }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const op = useSelector(state => state.users.data).filter(user => user.id === author)[0]
    const authUser = useSelector(state => state.auth.userId)

    const determineUserVote = (optOneVotes, optTwoVotes) => {
        if (optOneVotes.includes(authUser)) {
            return 'optionOne'
        } else if (optTwoVotes.includes(authUser)) {
            return 'optionTwo'
        } else {
            return null
        }
    }

    const userVote = determineUserVote(optionOne.votes, optionTwo.votes)

    const onVoteSubmit = (qid, answer) => {
        dispatch(actions.saveAnswer(qid, answer))
        history.push(`/questions/${qid}/results`)
    }
    
    
    return (
        <>
        <Container>
            <Header>
                <Avatar image={op.avatarURL}/>

                <UserInfo>
                    <span className='username'>{author}</span>
                    <span className='date'>posted {timestamp}</span>
                    <span className='date'>#{id}</span>
                </UserInfo>

                {tab === 'ANSWERED' && (
                    <Link className='viewPoll' to={`/questions/${id}/results`}><ViewPoll>View Poll</ViewPoll></Link>
                )}
            </Header>

            <Title>Would You Rather...</Title>

            <Choices>
                <div className='left-side'>
                    <p>
                        {optionOne.text}
                    </p>

                    {tab ==='UNANSWERED' && (
                        <button onClick={() => onVoteSubmit(id, 'optionOne')}>Vote</button>
                    )}
                    {tab === 'ANSWERED' && userVote === 'optionOne' && (
                        <button>Your Choice</button>
                    )}
                </div>

                <div className='right-side'>
                    <p>
                        {optionTwo.text}
                    </p>

                    {tab === 'UNANSWERED' && (
                        <button onClick={() => onVoteSubmit(id, 'optionTwo')}>Vote</button>
                    )}
                    {tab === 'ANSWERED' && userVote === 'optionTwo' && (
                        <button>Your Choice</button>
                    )}
                </div>
            </Choices>

            {/* <p>You voted: {userVote}</p> */}

        </Container>
        </>
    )
}

const Container = styled.div`
    width: 60%;
    height: auto;
    min-height: 25rem;
    margin: 1rem 0;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`

const Header = styled.div`
    height: 4rem;
    background-color: #0066FF;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: #fff;

    .viewPoll {
        margin-left: auto;
    }
`

const Avatar = styled.div`
    background-color: black;
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin-left: 2rem;
    margin-right: 1rem;
    background-image: url(${props => props.image});
    background-size: cover;
`

const UserInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;

    .username {
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    .date {
        font-size: 0.7rem;
        text-transform: uppercase;
    }
`

const ViewPoll = styled.button`
    margin-left: auto;
    margin-right: 10rem;
    width: 10rem;
    height: 2.5rem;
    background-color: transparent;
    border: none;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #fff;

    &:hover {
        background-color: #fff;
        color: #0066FF;
        font-weight: bold;
        transition: 0.5s;
    }
`

const Title = styled.h1`
    margin-left: 2rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 5rem;
    margin-top: 2rem;
`

const Choices = styled.div`
    width: 100%;
    height: 100%;
    min-height: 10rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    // background-color: purple;

    .left-side {
        width: 50%;
        // height: 90%;
    }

    .right-side {
        width: 50%;
        // height: 90%;
        border-left: 2px solid rgba(0, 0, 0, 0.5);
    }

    .left-side, .right-side {
        height: 100%;
        min-height: 10rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        // background-color: red;

        p {
            margin-bottom: auto;
        }
    }

    button {
        width: 7rem;
        height: 2rem;
        border-radius: 3px;
        border: 1px solid #0066FF;
        color: #0066FF;
    }

    button:hover {
        background-color: #0066FF;
        color: #fff;
        font-weight: bold;
        transition: 0.5s;
    }
`

export default Question