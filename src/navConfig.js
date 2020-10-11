import Home from './screens/home'
import Login from './screens/login'

const navConfig = {
    routes: [
      { label: 'Home', path: "/", component: Home, exact: true, default: true}
    ],
    authRoutes: [
      { label: 'Login', path: '/login', component: Login, fn: 'login' },
      { label: 'Logout', path: '/logout', fn: 'logout' }
    ],
}


export default navConfig