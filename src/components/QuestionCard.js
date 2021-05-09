import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const QuestionCard = ({ id, author, optionOne, optionTwo, timestamp }) => {
    const users = useSelector(state => state.users.data)
    const opAvatar = users.filter(user => user.id === author)[0].avatarURL
    console.log(opAvatar)
    
    return (
        <>
            <Container>
                {users && (
                    <Heading>
                        {opAvatar && <Avatar image={opAvatar} />}
                        <UserInfo>
                            <span className='author'>{author}</span>
                            <span className='date'>posted at {timestamp}</span>
                        </UserInfo>
                    </Heading>
                )}
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 800px;
    height: 400px;
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

export default QuestionCard