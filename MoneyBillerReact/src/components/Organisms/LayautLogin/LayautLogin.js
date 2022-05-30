import { Container } from 'react-grid-system';
import Navbar from 'components/Organisms/Navbar';

const LayoutLogin = ({ children }) => {
  return (
    <div className="App" align='center'>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default LayoutLogin;
