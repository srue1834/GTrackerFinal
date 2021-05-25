/* eslint-disable react/button-has-type */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eol-last */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Styles.css'
import logo from './imagenes/logo.png'
import useSignup from './useSignup'
import validar from './validar'

const Signup = ({ submitF, ingresarC }) => {
  const { cambios, values, subir, errors } = useSignup(submitF, validar, ingresarC)
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
      <div className="titulo">
        GTracker
        <img className="imagen" src={logo} alt="Logo" />
      </div>
      <form onSubmit={subir} className="form" noValidate>
        <div className="container2">
          <div className="ingresar">Registro de servicio</div>
          <div className="info">
            <label className="label">
              Email
            </label>
            <input id="email" name="email" className="input" type="text" placeholder="Ingrese su correo electrónico" value={values.email} onChange={cambios} />
            {errors.email && <p>{errors.email}</p>}
            <label className="label">
              Nombre de servicio
            </label>
            <input id="nombre" name="nombre" className="input" type="text" placeholder="Ingrese su nombre" value={values.nombre} onChange={cambios} />
            {errors.nombre && <p>{errors.nombre}</p>}
            <label className="label">
              Contraseña
            </label>
            <input id="contra" name="contra" className="input" type="password" placeholder="Ingrese su contrasena" value={values.contra} onChange={cambios} />
            {errors.contra && <p>{errors.contra}</p>}
            <button className="botonCodigo" type="submit">Generar código</button>
            <span className="label3">
              ¿Ya tiene un código?
              <a className="tag" href="#">Ingresar código</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup