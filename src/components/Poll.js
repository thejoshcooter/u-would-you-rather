import React, { useEffect } from 'react'
import styled from 'styled-components'

const Poll = ({ question }) => {    
    
    return (
        <>
        <Container>
            <Heading>
                <Avatar />
                <Info>
                    <h3>{question.author}</h3>
                    <span>posted at {question.timestamp}</span>
                    <span>{question.id}</span>
                </Info>
            </Heading>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 60%;
    height: 30rem;
    margin: 3rem auto;
    border-radius: 3px;
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

const Heading = styled.div`
    background-color: red;
    width: 100%;
    height: 4rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`

const Avatar = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 100px;
    background-color: black;
`

const Info = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default Poll