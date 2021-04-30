import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const MainMenu = () => {
    const history = useHistory()
    const auth = useSelector((state) => state.auth)

    const onLogout = () => {
        localStorage.clear()
        history.push('/')
    }
    
    return (
        <>
        <Menu>
            <Container>
                <Logo>Would You Rather?</Logo>

                <Nav>
                    <Link to='/'><button>Authentication</button></Link>
                    <Link to='/dashboard'><button>Dashboard</button></Link>
                    <Link to='/leaderboard'><button>Leaderboard</button></Link>
                    <Link to='/create'><button>Create Question</button></Link>
                    <Link to='/sandbox'><button>Sandbox</button></Link>
                </Nav>

                <Account>
                    <h3>{auth.user}</h3>
                    <button onClick={onLogout}>Logout</button>
                </Account>
            </Container>
        </Menu>
        </>
    )
}

const Menu = styled.div`
    width: 100%;
    height: 3rem;
    border: 1px solid black;
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

`

const Nav = styled.div`

`

const Account = styled.div`
    margin-left: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

export default MainMenu