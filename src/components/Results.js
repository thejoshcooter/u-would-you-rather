import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Results = ({ id, author, optionOne, optionTwo, timestamp }) => {
    const authUserAnswers = useSelector(state => state.auth.answers)
    const totalVotes = optionOne.votes.length + optionTwo.votes.length
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const optionOnePercent = Math.floor(optionOneVotes / totalVotes * 100)
    const optionTwoPercent = Math.floor(optionTwoVotes / totalVotes * 100)
    const authUserVote = authUserAnswers[id]
    
    return (
        <>
        <Container>
            <Option className={authUserVote === 'optionOne' ? 'selected' : ''}>
                {authUserVote === 'optionOne' && (
                    <button>Your Choice</button>
                )}

                <p>{optionOne.text}</p>
                <span className='vote-count'>{optionOneVotes} out of {totalVotes} people voted for this option</span>
                <ProgressBar>
                    <Progress value={optionOnePercent}>
                        {optionOnePercent > 10 && (
                            <span>{optionOnePercent}%</span>
                        )}
                    </Progress>
                </ProgressBar>
            </Option>

            <Option className={authUserVote === 'optionTwo' ? 'selected' : ''}>
                {authUserVote === 'optionTwo' && (
                    <button>Your Choice</button>
                )}

                <p>{optionTwo.text}</p>
                <span className='vote-count'>{optionTwoVotes} out of {totalVotes} people voted for this option</span>
                <ProgressBar>
                    <Progress value={optionTwoPercent}>
                    {optionTwoPercent > 10 && (
                            <span>{optionTwoPercent}%</span>
                    )}
                    </Progress>
                </ProgressBar>
            </Option>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const Option = styled.div`
    width: 80%;
    padding: 1rem;
    border-radius: 3px;
    margin: 1rem 0;
    
    &.selected {
        border: 2px dashed #0066FF;
    }

    button {
        width: 10rem;
        height: 2rem;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid #0066FF;
        color: #0066FF;
    }

    p {
        font-weight: bold;
    }

    .vote-count {
        font-size: 0.8rem;
    }
`

const ProgressBar = styled.div`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
    background-color: rgba(0, 0, 0, 0.2);
`

const Progress = styled.div`
    width: ${props => props.value}%;
    height: 100%;
    background-color: #0066FF;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: #fff;
`

export default Results