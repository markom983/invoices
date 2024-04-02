import React, {Component} from "react";
import { connect } from 'react-redux'
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import navConfig from './navConfig'
import { getDefaultRoute } from './lib/utils'
import ProtectedRoute from './components/protectedRoute'
import history from './history'

const mapRoutes = (routes, extraProps = {}) => {
	return routes.filter(route => !!route.path && !!route.component).map(item => {
    const { path } = item
    console.log('item.', item)
    const ActualRoute = item.protected ? ProtectedRoute : Route
		return (
      <ActualRoute exact={ item.exact } path={ path } key={ 'nav-key-' + path } route={ item }
        cmp={ item.component }
				render={ props =>
					item.render ?
						item.render({ ...props, ...extraProps, route: item })
						:
						<item.component { ...props } { ...extraProps } route={ item } />
				}
			/>
		)
	})
}

class App extends Component {
	constructor(props) {
    super(props)
    this.defaultRoute = []
		this.routeComponents = []
		this.authRouteComponents = []
	}

	generateRoutes = () => {
    this.defaultRoute = getDefaultRoute()
		this.routeComponents = mapRoutes(navConfig.routes)
		this.authRouteComponents = mapRoutes(navConfig.authRoutes)
  }

  render () {
    this.generateRoutes()
    return (
      <Router history={ history }>
        <Switch>
          { this.routeComponents }
          { this.authRouteComponents }
          { this.defaultRoute ? <Route exact path="/" render={ () => <Redirect to={ this.defaultRoute.path } /> } /> : null }
        </Switch>
      </Router>
    )
  }
}


const stateToProps = store => {
	return {
	}
}
export default connect(stateToProps)(App)
