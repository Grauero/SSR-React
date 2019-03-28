import Home from './components/Home';
import UsersList from './components/UsersList';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList
  }
];

export default Routes;
