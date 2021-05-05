import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Poll = ({ question }) => {    
    console.log(question)
    const authenticatedUserId = useSelector(state => state.auth).userId
    const users = useSelector(state => state.users.data)
    const authorImageURL = users.filter(user => user.id === question.author)[0].avatarURL
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const optionOnePercent = (question.optionOne.votes.length / totalVotes) * 100
    const optionTwoPercent = (question.optionTwo.votes.length / totalVotes) * 100
    
    return (
        <>
        <Container>
            <Heading>
                <Avatar image={authorImageURL} />
                <Info>
                    <h3>{question.author}</h3>
                    <span className='date'>posted at {question.timestamp}</span>
                    <span className='date'>{question.id}</span>
                </Info>
            </Heading>

            <Option>
                <p>{question.optionOne.text}</p>
                <VoteBar>
                    <ProgressBar progress={optionOnePercent}/>
                </VoteBar>
                <p>Vote Percent: {optionOnePercent}</p>
            </Option>

            <Option>
                <p>{question.optionTwo.text}</p>
                <VoteBar>
                    <ProgressBar progress={optionTwoPercent}/>
                </VoteBar>
                <p>Vote Percent: {optionTwoPercent}</p>
            </Option>

            <p>Total Votes: {totalVotes}</p>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 60%;
    height: auto;
    min-height: 30rem;
    margin: 3rem auto;
    border-radius: 3px;
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

const Heading = styled.div`
    background-color: #0066FF;
    width: 100%;
    height: 6rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`

const Avatar = styled.div`
    width: 4rem;
    height: 4rem;
    margin-left: 2rem;
    border-radius: 100px;
    background-color: black;
    background-size: cover;
    background-image: url(${props => props.image});
`

const Info = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    color: #fff;

    h3 {
        margin: 0.5rem 1rem;
    }

    span {
        margin: 0 1rem;
    }

    .date {
        font-size: 0.75rem;
    }
`

const Option = styled.div`
    width: 100%;
    height: 10rem;
    margin: 1rem 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const VoteBar = styled.div`
    width: 80%;
    height: 3rem;
    border-radius: 3px;
    border: 2px solid rgba(0, 0, 0, 0.2);
`

const ProgressBar = styled.div`
    width: ${props => `${props.progress}%`};
    height: 100%;
    background-color: #0066FF;
`

export default Poll