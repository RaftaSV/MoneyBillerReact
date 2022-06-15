import { Container } from 'react-grid-system';

import Navbar from 'components/Organisms/Navbar';
import NavbarLogin from '../Navbar/NavbarLogin';

const LayoutLogin = ({ children }) => {
  return (
    <div className="App">
      <NavbarLogin />
      <Container>{children}</Container>
    </div>
  );
};

export default LayoutLogin;
