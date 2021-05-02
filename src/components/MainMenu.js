import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const MainMenu = () => {
    const history = useHistory()
    const auth = useSelector((state) => state.auth)
    const user = useSelector(state => state.users.data).filter(user => user.id === auth.userId)[0]
    console.log('USER CHECK ', user)

    useEffect(() => {
        console.log('*** MAIN MENU MOUNTED ***')
    }, [])

    const onLogout = () => {
        localStorage.clear()
        history.push('/')
    }
    
    return (
        <>
        <Menu>
            <Container>
                <Logo><span>Would You Rather?</span></Logo>

                <Nav>
                    <Link to='/'><button>Authentication</button></Link>
                    <Link to='/dashboard'><button>Dashboard</button></Link>
                    <Link to='/leaderboard'><button>Leaderboard</button></Link>
                    <Link to='/create'><button>Create Question</button></Link>
                    <Link to='/sandbox'><button>Sandbox</button></Link>
                </Nav>

                {localStorage.getItem('authenticatedUser') && (
                    <Account>
                        <Avatar image={auth.avatarURL}>
                        </Avatar>
                        <h3>{auth.user}</h3>
                        <button onClick={onLogout}>Logout</button>
                    </Account>
                )}

                {!localStorage.getItem('authenticatedUser') && (
                    <Account>
                        <button>Login</button>
                    </Account>
                )}
            </Container>
        </Menu>
        </>
    )
}

const Menu = styled.div`
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`

const Logo = styled.div`
    width: 12rem;
    height: 100%;
    display: flex;
    flex-flow: colum nowrap;
    justify-content: center;
    align-items: center;

    span {
        text-transform: uppercase;
        font-weight: bold;
        color: #0066FF;
    }
`

const Nav = styled.div`
    height: 100%;

    button {
        height: 100%;
        border: none;
        margin: 0 1rem;
    }

    button:hover {
        border-bottom: 2px solid #0066FF;
    }
`

const Account = styled.div`
    margin-left: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

const Avatar = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100px;
    background-image: url(${props => props.image});
    background-size: cover;
`

export default MainMenu