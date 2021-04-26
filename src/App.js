import React from 'react'
import { Route } from 'react-router-dom'

import MainMenu from './components/MainMenu'
import AuthenticationView from './views/authentication'
import DashboardView from './views/dashboard'
import LeaderboardView from './views/leaderboard'

const App = () => {
  return (
    <>
      <Route path='/' component={MainMenu} />
      <Route exact path='/' component={AuthenticationView} />
      <Route path='/dashboard' component={DashboardView} />
      <Route path='/leaderboard' component={LeaderboardView} />
    </>
  );
}

export default App;
