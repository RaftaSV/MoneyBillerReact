import {Link} from 'react-router-dom';

import {ROUTES} from 'config';
import ng from './Images/ng.png'
import HOME from 'components/Atoms/Icons/Home';
import LogoProyect from './Images/LogoProyect.png';
import MenuNavbar from 'components/Molecules/MenuNavbar';
import { StyleNavbar, StyleImage, StyleImagePagosv, Home } from './style';


const Navbar = () => {
  return (
    <StyleNavbar>
      <StyleImage loading="lazy" src={LogoProyect}/>
      <StyleImagePagosv loading="lazy" src={ng}/>

  <Link to={ROUTES.MAIN.absolutePath}>
    <Home>
         <HOME/>
    </Home>
  </Link>
      <MenuNavbar />
    </StyleNavbar>
  );
};

export default Navbar;
