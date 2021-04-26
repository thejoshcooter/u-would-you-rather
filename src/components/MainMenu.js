import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainMenu = () => {
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
                </Nav>

                <Account>
                    <h3>User</h3>
                    <button>Logout</button>
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