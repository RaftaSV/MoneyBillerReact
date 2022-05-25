import MenuNavbar from 'components/Molecules/MenuNavbar';

import { StyleNavbar, StyleImage, StyleImagePagosv } from './style';

const Navbar = () => {
  return (
    <StyleNavbar>
      <StyleImage loading="lazy" src={'LogoProyect.png'}/>
      <StyleImagePagosv loading="lazy" src={'ng.png'}/>
      <MenuNavbar />
    </StyleNavbar>
  );
};

export default Navbar;
