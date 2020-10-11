import { LOGIN_REQUEST, RESTORE_AUTH, SET_PROTECTED_REFERRER, SET_REGISTER_FORM, REGISTER_REQUEST, RESET_PASSWORD, LOGOUT } from './constants'

export const loginRequest = data => ({ type: LOGIN_REQUEST, ...data })

export const restoreAuth = () => ({ type: RESTORE_AUTH })

export const setProtectedReferrer = path => ({ type: SET_PROTECTED_REFERRER, path })

export const registerRequest = data => ({ type: REGISTER_REQUEST, data })

export const resetPassword = email => ({ type: RESET_PASSWORD, email })

export const logout = (cb = null) => ({ type: LOGOUT, cb })

export const setRegisterForm = (key, value) => ({ type: SET_REGISTER_FORM, key, value })
