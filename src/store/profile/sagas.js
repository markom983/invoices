
import { LOGIN_REQUEST, LOGOUT, REGISTER_REQUEST, SET_PROFILE_PROP } from './constants'
import { getDefaultRoute } from '../../lib/utils'

const authRoutes = {
	protectedLanding: getDefaultRoute(true).path,
	unprotectedLanding: getDefaultRoute().path
}

/* Login saga */
export const loginFlow = function* () {
	while (true) {
		const { username, password, referrer } = yield take(LOGIN_REQUEST)
		const store = yield select()

		yield call(loading, function *() {
			const response = yield call(authorize, { username, password, isRegistering: false })
			const { token, profile } = response.data

			// yield call(asyncStorage.setItem, 'token', token)
			// yield call(asyncStorage.setItem, 'profile', JSON.stringify(profile))

			yield put({ type: SET_PROFILE_PROP, key: 'auth', value: { loggedIn: true, token }})
			yield put({ type: SET_PROFILE_PROP, key: 'profile', value: profile })
			yield call(saveFcmToken)
			
			forwardTo(referrer || authRoutes.unprotectedLanding)
		})
	}
}