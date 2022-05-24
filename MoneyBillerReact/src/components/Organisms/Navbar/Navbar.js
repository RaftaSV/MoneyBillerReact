import MenuNavbar from 'components/Molecules/MenuNavbar';
import Title from 'components/Atoms/Title';
import { StyleNavbar } from './style';

const Navbar = () => {
  return (
    <StyleNavbar>
      <Title color="secondary">MONEYBILLER</Title>
      <MenuNavbar />
    </StyleNavbar>
  );
};

export default Navbar;
