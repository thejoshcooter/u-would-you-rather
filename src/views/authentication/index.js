import React from 'react'
import styled from 'styled-components'

const AuthenticationView = () => {
    return (
        <>
           <Container>
               <Info>
                    <h2>Welcome to Would You Rather?</h2>
                    <p>Please choose a user account to test the app.</p>
                    <button>John Doe</button>
                    <button>Jane Doe</button>
                    <button>Bob Bobberton</button>
               </Info>

               <AuthForm>
                    <form>
                        <input 
                            name='username'
                            placeholder='username'
                        />

                        <input 
                            name='password'
                            placeholder='password'
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
    border: 1px solid black;
`

const Info = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const AuthForm = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;

    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
`

export default AuthenticationView