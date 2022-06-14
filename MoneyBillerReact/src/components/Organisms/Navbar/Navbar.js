import MenuNavbar from 'components/Molecules/MenuNavbar';
import LogoProyect from './Images/LogoProyect.png';
import ng from './Images/ng.png'
import { StyleNavbar, StyleImage, StyleImagePagosv } from './style';

const Navbar = () => {
  return (
    <StyleNavbar>
      <StyleImage loading="lazy" src={LogoProyect}/>
      <StyleImagePagosv loading="lazy" src={ng}/>
      <MenuNavbar />
    </StyleNavbar>
  );
};

export default Navbar;
