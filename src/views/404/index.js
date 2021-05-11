import React from 'react'
import styled from 'styled-components'

const Error404 = () => {
    return (
        <>
        <Container>
            <h1>404</h1>
            <span>Sorry, we couldn't find the page you are looking for.</span>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: bold;
        font-size: 10rem;
        margin-top: 5rem;
    }
`

export default Error404