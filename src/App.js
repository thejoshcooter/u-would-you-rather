import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import * as actions from './redux/actions'
import { useDispatch } from 'react-redux'

import MainMenu from './components/MainMenu'
import AuthenticationView from './views/authentication'
import DashboardView from './views/dashboard'
import LeaderboardView from './views/leaderboard'
import CreateQuestionView from './views/create-question'
import PollView from './views/poll'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
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
      <Route path='/dashboard' component={DashboardView} />
      <Route path='/leaderboard' component={LeaderboardView} />
      <Route path='/create' component={CreateQuestionView} />
      <Route path='/questions/:id' component={PollView} />
    </>
  );
}

export default App;
