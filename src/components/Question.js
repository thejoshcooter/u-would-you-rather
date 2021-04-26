import React from 'react'
import styled from 'styled-components'

const Question = () => {
    return (
        <>
        <Container>
            <Header>
                <Avatar />

                <UserInfo>
                    <span className='username'>John Doe</span>
                    <span className='date'>posted 03:46PM | 04/26/21</span>
                </UserInfo>

                <ViewPoll>View Poll</ViewPoll>
            </Header>

            <Title>Would You Rather...</Title>

            <Choices>
                <div className='left-side'>
                    <p>
                        this is some placeholder text for option number 1
                    </p>

                    <button>Vote</button>
                </div>

                <div className='right-side'>
                    <p>this is some placeholder text for option number 2</p>

                    <button>Vote</button>
                </div>
            </Choices>

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
    border: 1px solid black;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`

const Header = styled.div`
    background-color: gray;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`

const Avatar = styled.div`
    background-color: black;
    width: 4rem;
    height: 4rem;
    border-radius: 100px;
    margin-left: 2rem;
    margin-right: 1rem;
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
`

const Title = styled.h1`
    margin-left: 2rem;
    text-transform: uppercase;
    font-size: 1.5rem;
`

const Choices = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    .left-side {
        width: 50%;
        height: 90%;
    }

    .right-side {
        width: 50%;
        height: 90%;
        border-left: 1px solid black;
    }

    .left-side, .right-side {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
`

export default Question