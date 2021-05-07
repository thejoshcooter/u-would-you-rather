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
import PollView from './views/poll'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('*** APP MOUNTED ***')

    dispatch(actions.loadAppData())
    
    if (localStorage.getItem('authenticatedUser')) {
      let authUser = JSON.parse(localStorage.getItem('authenticatedUser'))
      dispatch(actions.setAuthenticatedUser(authUser))
    }
  }, [])
  
  return (
    <>
      <Route path='/' component={MainMenu} />
      <Route exact path='/' component={AuthenticationView} />
      <PrivateRoute path='/dashboard' component={DashboardView} />
      <PrivateRoute path='/leaderboard' component={LeaderboardView} />
      <PrivateRoute path='/add' component={CreateQuestionView} />
      <PrivateRoute path='/questions/:id/results' component={PollView} />
    </>
  );
}

export default App;
