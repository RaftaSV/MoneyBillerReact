import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import { ROUTES } from 'config';
import Home from 'pages/Login';
import Companies from 'pages/Companies';
import Services from 'pages/Services';
import NotFound from 'pages/404';


const Routes = () => {
  return (
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/">
            <Route index path={ROUTES.HOME.absolutePath} element={<Home />} />
            <Route path="signup" element={<h1>Signup</h1>} />
          </Route>
          <Route path="/app">
            <Route index path={ROUTES.COMPANIES.absolutePath} element={<Companies />} />
            <Route path={ROUTES.SERVICES.absolutePath} element={<Services />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </BrowserRouter>
  );
};

export default Routes;
