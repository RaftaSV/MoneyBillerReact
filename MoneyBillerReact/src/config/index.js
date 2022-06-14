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
  NOTFOUND: {
    path: 'NotFound',
    absolutePath: '/app/NotFound'
  }
}


export default config;
