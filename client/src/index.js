import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import indexRoutes from 'routes/index.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/sass/light-bootstrap-dashboard.css?v=1.2.0'
import './assets/css/demo.css'
import './assets/css/pe-icon-7-stroke.css'

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import store from './store'
import { Provider } from 'react-redux'

// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />
          })}
        </Switch>
      </BrowserRouter>
    </AlertProvider>
  </Provider>
  ,
  document.getElementById('root')
)
