import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Poll from './Poll'
import Results from './Results'

const QuestionCard = ({ id, author, optionOne, optionTwo, timestamp, answered }) => {
    const users = useSelector(state => state.users.data)
    const opAvatar = users.filter(user => user.id === author)[0].avatarURL
    const userAnswers = useSelector(state => state.auth.answers)
    
    return (
        <>
        {users && (
            <Container>
                    <Heading>
                        {opAvatar && <Avatar image={opAvatar} />}
                        <UserInfo>
                            <span className='author'>{author}</span>
                            <span className='date'>posted at {new Date(timestamp).toDateString()}</span>
                        </UserInfo>

                        {Object.keys(userAnswers).includes(id) && (
                            <Link className='more' to={`/questions/${id}`}><button>View Results</button></Link>
                        )}

                        {!Object.keys(userAnswers).includes(id) && (
                            <Link className='more' to={`/questions/${id}`}><button>View Poll</button></Link>
                        )}
                    </Heading>
                    
                    <Title>Would You Rather...</Title>

                    <Content>
                        {!answered && (
                            <Poll 
                                id={id}
                                author={author}
                                optionOne={optionOne}
                                optionTwo={optionTwo}
                            />
                        )}

                        {answered && (
                            <Results 
                                id={id}
                                author={author}
                                optionOne={optionOne}
                                optionTwo={optionTwo}
                            />
                        )}
                    </Content>
            </Container>
        )}
        </>
    )
}

const Container = styled.div`
    width: 50rem;
    min-height: 30rem;
    margin: 1rem 0;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`

const Heading = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #0066FF;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: #fff;

    .more {
        margin-left: auto;
        margin-right: 2rem;

        button {
            width: 8rem;
            height: 2rem;
            border-radius: 3px;
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
        }

        button:hover {
            background-color: #fff;
            color: #0066ff;
            transition: 0.5s;
        }
    }
`

const Avatar = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100px;
    background-size: cover;
    background-image: url(${props => props.image});
    margin-left: 1rem;
`

const UserInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1rem;

    .author {
        font-weight: bold;
        font-size: 1.25rem;
    }

    .date {
        font-size: 0.8rem;
    }
`

const Title = styled.h1`
    text-align: center;
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.8);
`

const Content = styled.div`
    width: 100%;
    min-height: 20rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 0rem;
`

export default QuestionCard