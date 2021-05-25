/* eslint-disable arrow-body-style */
import React, { useState } from 'react'
import Signup from './Signup'
import PrincipalE from './PrincipalE'
// import Login from './Login'
// import PrincipalE from './PrincipalE'

const Formulario = () => {
  const [isSub, setIsSub] = useState(false)

  function submitF() {
    setIsSub(true)
  }
  function ingresarC() {
    setIsSub(false)
  }
  return (
    <div>
      {!isSub ? <Signup submitF={submitF} ingresarC={ingresarC} /> : <PrincipalE />}
      {/* {!isSub ? <Signup ingresarC={ingresarC} /> : <Login />} */}
    </div>
  )
}

export default Formulario
