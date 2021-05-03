import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import UserCard from './UserCard'

const LeaderboardView = () => {
    const users = useSelector(state => state.users.data)
                    .map(user => {
                        let score = user.questions.length + Object.keys(user.answers).length
                        return { ...user, score: score }
                    })
                    .sort((a, b) => b.score - a.score)

    useEffect(() => {
        
    }, [])
    
    return (
        <>
            <Container>
                <Leaderboard>
                    <h2>Leaderboard</h2>

                    {users.map((user, ind) => (
                        <UserCard 
                            key={user.id}
                            user={user}
                            rank={ind}
                        />
                    ))}
                </Leaderboard>
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

const Leaderboard = styled.div`
    width: 60%;
    height: 50rem;
`

export default LeaderboardView