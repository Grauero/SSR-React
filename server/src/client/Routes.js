import App from './App';
import HomePage from './pages/HomePage';
import AdminsListPage from './pages/AdminsListPage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

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
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

export default Routes;
