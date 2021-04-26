import React from 'react'
import styled from 'styled-components'

const DashboardView = () => {
    return (
        <>
        <Container>
            <Tabs>
                <div>Unanswered</div>
                <div>Answered</div>
            </Tabs>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 800px;
    margin: 0 auto;
    margin-top: 3rem;
    border: 1px solid black;
`

const Tabs = styled.div`
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;

    div {
        width: 10rem;
        height: 100%;
        margin: 0 1rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
`

export default DashboardView