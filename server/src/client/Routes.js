import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

const Routes = [
  {
    // root component, that will be always visible
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      }
    ]
  }
];

export default Routes;
