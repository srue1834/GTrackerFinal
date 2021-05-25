/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
// import Signup from './components/Signup'
import Formulario from './components/Formulario'
// import Login from './components/Login'

const App = () => (
  <div>
    <style>{'body { background-color: transparent; }'}</style>
    {/* <Login /> */}
    <Formulario />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
