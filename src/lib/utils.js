import navConfig from '../navConfig'
import history from '../history'

export const getDefaultRoute = protectedRoute => {
	protectedRoute = protectedRoute ? protectedRoute : false
	let defaultRoute = navConfig.routes.find(item => item.default === true && (protectedRoute ? item.protected === true : item.protected !== true))
	if (!defaultRoute) {
		defaultRoute = navConfig.routes.find(item => protectedRoute ? item.protected === true : item.protected !== true)
	}
	return defaultRoute || navConfig.routes[0]
}

 export const isDefined = item => item !== undefined && item !== null

 export const forwardTo = (location, historyState = null) => {
	if (location === history.location.pathname) {
		// prevent to push same path to the history object multiple times in the row
		history.replace(location, historyState)
		return
	} else {
		history.push(location, historyState)
	}
}

export const goBack = () => history.goBack()
