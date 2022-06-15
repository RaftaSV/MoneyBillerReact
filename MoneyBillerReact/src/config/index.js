const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const config = {
  baseUrl
};

export const ROUTES = {
  HOME: {
    path: '/',
    absolutePath: '/'
  },
  COMPANIES: {
    path: 'Companies',
    absolutePath: '/app/Companies'
  },
  SERVICES: {
    path: 'Services',
    absolutePath: '/app/Services'
  },
  USERS: {
    path: 'Users',
    absolutePath: '/app/Users'
  },
  MEMBERS: {
    path: 'Members',
    absolutePath: '/app/Members'
  },
  MAIN: {
    path: 'Main',
    absolutePath: '/app/Main'
  },
  NOTFOUND: {
    path: 'NotFound',
    absolutePath: '/app/NotFound'
  }
}


export default config;
