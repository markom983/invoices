import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../../store/actions'
import { forwardTo, getDefaultRoute } from '../../lib/utils'
import './index.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			formErrors: {}
    }
    this.handleInput = this.handleInput.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

  handleInput (key, val) {
		this.setState({ [key]: val })
	}

  handleLogin () {
    const { protectedReferrer } = this.props
    const { username, password } = this.state
    this.props.dispatch(loginRequest({ username, password, referrer: protectedReferrer }))
	}

  checkLoginStatus = () => {
		const { loggedIn } = this.props.auth
		if (loggedIn) {
			const defaultRoute = getDefaultRoute()
			forwardTo(defaultRoute.path)
		}
	}

	componentDidUpdate() {
		this.checkLoginStatus()
	}

	componentDidMount() {
		this.checkLoginStatus()
  }
  
	render () {
		return (
      <div className="main-div">
				<h1>Login</h1>
			</div>
		)
	}
}

const stateToProps = state => {
  const { auth } = state.profile
	return {
		auth
	}
}

export default connect(stateToProps)(Login)
