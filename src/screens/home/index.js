import React from 'react'
import { connect } from 'react-redux'
import history from '../../history'
import { getDefaultRoute, forwardTo } from '../../lib/utils'
import './index.css'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	handleLogin = () => {
		forwardTo('/login')
	}

	render () {
		return (
            <div className="main-div">
				<h1>Invoices Home</h1>
				<button onClick={this.handleLogin}></button>
			</div>
		)
	}
}

const stateToProps = state => {
	return {
	}
}

export default connect(stateToProps)(Home)
