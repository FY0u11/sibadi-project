import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './store/reducers'
import App from './App'

export const reduxStore = createStore(rootReducer)

render(
  <Router>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('app')
)
