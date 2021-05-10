import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import * as actions from './redux/actions'
import { useDispatch } from 'react-redux'
import PrivateRoute from './utils/PrivateRoute'

import MainMenu from './components/MainMenu'
import AuthenticationView from './views/authentication'
import DashboardView from './views/dashboard'
import LeaderboardView from './views/leaderboard'
import CreateQuestionView from './views/create-question'
import QuestionView from './views/question'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('*** APP MOUNTED ***')

    dispatch(actions.loadAppData())
    
    let user = localStorage.getItem('authenticatedUser')

        if (user) {
            user = JSON.parse(user)
            dispatch(actions.setAuthenticatedUser(user))
        }
  }, [])
  
  return (
    <>
      <Route path='/' component={MainMenu} />
      <Route exact path='/' component={AuthenticationView} />
      <PrivateRoute path='/dashboard' component={DashboardView} />
      <PrivateRoute path='/leaderboard' component={LeaderboardView} />
      <PrivateRoute path='/add' component={CreateQuestionView} />
      <PrivateRoute path='/questions/:id' component={QuestionView} />
    </>
  );
}

export default App;
