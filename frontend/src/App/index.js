import React, { useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { initStore } from '../store/actions'
import { setNotificationError } from '../store/components/notifications/actions'

import Loading from '../components/Loading'
import Main from '../scenes/Main'
import Authorization from '../scenes/Authorization'
import Header from '../components/Header'
import Notifications from '../components/Notifications'
import Cart from '../components/Cart'
import Modal from '../components/Modal'

const App = ({ isLoading, setNotificationError }) => {
  useEffect(() => {
    ;(async () => {
      try {
        await initStore()
      } catch (error) {
        setNotificationError(error.message)
      }
    })()
  }, [])

  return (
    <>
      <Notifications />
      <Modal />
      <Header />
      <Cart />
      <div className="container">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <Switch>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/authorization">
              <Authorization />
            </Route>
            <Redirect to="/main" />
          </Switch>
        )}
      </div>
    </>
  )
}

const putStateToProps = state => ({ isLoading: state.root.isLoading })
const putActionsToProps = { setNotificationError }

export default connect(putStateToProps, putActionsToProps)(App)
