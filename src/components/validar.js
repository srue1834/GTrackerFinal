/* eslint-disable prefer-const */
/* eslint-disable no-console */
export default function validar(values) {
  let errors = {}

  if (!values.nombre.trim()) {
    errors.nombre = 'Se requiere nombre de servicio'
  }
  if (!values.email) {
    errors.email = 'Se requiere email'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = console.log('buju')
  }
  if (!values.contra) {
    errors.contra = 'Se requiere contraseña'
  }

  return errors
}
