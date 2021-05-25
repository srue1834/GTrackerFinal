/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Styles.css'
import logo from './imagenes/logo.png'

const Login = () => (
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
    <div className="titulo">
      GTracker
      <img className="imagen" src={logo} alt="Logo" />
    </div>
    <div className="form">
      <div className="container2">
        <div className="ingresar">Ingresar</div>
        <div className="info">
          <label className="label">
            Email
          </label>
          <input className="input" type="text" placeholder="Ingrese su correo electrónico" />
          <label className="label">
            Código
          </label>
          <input className="input" type="password" placeholder="Ingrese su código" />
          <label className="seleccion">
            <label className="label2">
              Seleccione un usuario:
            </label>
            <label className="usuario">
              <input type="radio" value="motorista" name="usuario" />
              Motorista
            </label>
            <label className="usuario">
              <input type="radio" value="motorista" name="usuario" />
              Cliente
            </label>
          </label>
          <button className="boton" type="button">Ingresar</button>
        </div>
      </div>
    </div>
  </div>

)

export default Login
