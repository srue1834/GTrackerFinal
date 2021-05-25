/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const useSignup = (validate, callback) => {
  const [values, setValues] = useState({
    email: '',
    nombre: '',
    contra: '',
  })
  const [errors, setErrors] = useState({})
  const [isSub, setIsSub] = useState(false)

  const cambios = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const subir = e => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSub(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSub) {
      callback()
    }
  }, [errors])

  return {
    cambios, values, subir, errors,
  }
}

export default useSignup
