import { Container } from 'react-grid-system';
import NavbarLogin from '../Navbar/NavbarLogin';

const LayoutLogin = ({ children }) => {
  return (
    <div className="App" align='center'>
      <NavbarLogin />
      <Container>{children}</Container>
    </div>
  );
};

export default LayoutLogin;
