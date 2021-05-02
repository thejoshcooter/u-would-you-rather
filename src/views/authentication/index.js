import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'

const AuthenticationView = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const auth = useSelector((state) => state.auth)
    const users = useSelector((state) => state.users)
    const [form, setForm] = useState({
        id: null,
        username: '',
        password: ''
    })

    useEffect(() => {
        if (users.data.length < 1) {
            dispatch(actions.fetchUsers())
        }

        if (localStorage.authenticatedUser) {
            history.push('/dashboard')
        }
    },[])

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const selectDemo = (userId, username) => {
        setForm({ id: userId, username: username, password: 'password123' })
    }

    const onAuthSubmit = (e) => {
        e.preventDefault()

        let demoUsers = ['Sarah Edo', 'Tyler McGinnis', 'John Doe']

        if (demoUsers.includes(form.username) && form.password === auth.demoCredentials) {
            users.data.map(user => {
                if (user.name === form.username) {
                    localStorage.setItem('authenticatedUser', JSON.stringify(user))
                }
            })
            dispatch(actions.demoLogin(form.id, form.username))
            history.push('/dashboard')
        } else {
            console.log('please provide valid credentials!')
        }
    }
    
    return (
        <>
           <Container>
               <Info>
                    <h2>Welcome to Would You Rather?</h2>
                    <p>Please choose a user account to test the app.</p>
                    {users.data.length > 1 && users.data.map(user => (
                        <button key={user.id} onClick={() => selectDemo(user.id, user.name)}>{user.name}</button>
                    ))}
               </Info>

               <AuthForm>
                    <form onSubmit={onAuthSubmit}>
                        <input 
                            name='username'
                            placeholder='username'
                            value={form.username}
                            onChange={onChange}
                        />

                        <input 
                            name='password'
                            placeholder='password'
                            value={form.password}
                            onChange={onChange}
                        />

                        <button>Login</button>
                    </form>
               </AuthForm>
           </Container>
        </>
    )
}

const Container = styled.div`
    width: 50rem;
    height: 30rem;
    margin: 0 auto;
    margin-top: 25vh;
    border-radius: 3px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`

const Info = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #0066FF;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    color: #fff;

    button {
        width: 15rem;
        height: 2rem;
        margin: 0.5rem 0;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid #fff;
        color: #fff;
    }

    button:hover {
        background-color: #fff;
        color: #0066FF;
        transition: 0.5s;
    }
`

const AuthForm = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        input {
            width: 15rem;
            height: 2rem;
            margin: 0.2rem 0;
        }

        button {
            width: 15.5rem;
            height: 2rem;
            margin-top: 1rem;
        }
    }
`

export default AuthenticationView