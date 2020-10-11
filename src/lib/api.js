import axios from 'axios'
import { isDefined } from './utils'

let axiosInstance

// const baseURL = api.baseURL
const endpoints = {
	login: '/api-token-auth', //post
	register: '/me/register', //post
}


const createAxiosInstance = token => {
	const headers = isDefined(token) ? {
		Authorization: 'JWT ' + token
	} : {}
	axiosInstance = axios.create({
		headers,
		timeout: 30000
	})
	return axiosInstance
}

const api = {
	// login: async (username, password) => {
	// 	const response = await createAxiosInstance().post(baseURL + endpoints.login, { username, password })
	// 	axiosInstance = createAxiosInstance(response.data.token)
	// 	return response
	// },
	// register: async userData => {
	// 	const response = await createAxiosInstance().post(baseURL + endpoints.register, userData)
	// 	axiosInstance = createAxiosInstance(response.data.token)
	// 	return response
	// },
	// logout: () => {
	// 	// eslint-disable-next-line no-console
	// 	console.log('logout')
	// },
	// resetPassword: async email => await axiosInstance.put(baseURL + endpoints.resetPassword, { email }),
}

api.createAxiosInstance = createAxiosInstance

export default { ...api }
