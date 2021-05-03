import React from 'react'
import styled from 'styled-components'

const UserCard = ({ user, rank }) => {
    return (
        <>
            <Container>
                <Avatar image={user.avatarURL}/>
                
                <Info>
                    <h2>{user.name}</h2>
                    <div>
                        <p>Questions Asked: {user.questions.length}</p>
                        <p>Questions Answered: {Object.keys(user.answers).length}</p>
                    </div>
                </Info>

                <Score>
                <h3>Rank: <span>{rank + 1}</span></h3>
                <h3>Score: <span>{user.questions.length + Object.keys(user.answers).length}</span></h3>
                </Score>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 15rem;
    margin: 2rem 0;
    border-radius: 3px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

const Avatar = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    background-size: cover;
    background-image: url(${props => props.image});
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`

const Info = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-left: 2px solid rgba(0, 0, 0, 0.5);
    border-right: 2px solid rgba(0, 0, 0, 0.5);

    h2 {
        margin: 0;
        font-size: 2rem;
    }

    p {
        text-align: left;
        margin: 0;
    }

    div {
        width: 80%;
        margin-top: 2rem;
    }
`

const Score = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h3 {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0;
    }

    span {
        color: #0066FF;
    }
`

export default UserCard