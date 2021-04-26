import React from 'react'
import styled from 'styled-components'

const LeaderboardView = () => {
    return (
        <>
            <Container>
                <Leaderboard>
                    <h2>Leaderboard</h2>
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
    border: 1px solid black;
`

export default LeaderboardView