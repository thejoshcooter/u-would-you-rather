import React from 'react'
import styled from 'styled-components'

const Poll = ({ id, author, optionOne, optionTwo }) => {
    return (
        <>
            <Container>
                <Option>
                    <p>{optionOne.text}</p>
                    <button>Vote</button>
                </Option>

                <Divider>
                    or
                </Divider>

                <Option>
                    <p>{optionTwo.text}</p>
                    <button>Vote</button>
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
`

export default Poll