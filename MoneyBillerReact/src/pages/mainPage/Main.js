import   CardMain  from 'components/Molecules/CardMain'
import Layout from 'components/Organisms/Layout';
import user from './Images/User.png';
import member from './Images/Member.png';
import company from './Images/Company.png';
import service from './Images/Services.png';
import {Col, Row} from 'react-grid-system';
import {ROUTES} from '../../config';
import {Link} from 'react-router-dom';

document.title = 'Main';

function Main() {
  return (
    <Layout>
      <Row >
      <Col xs={6} md={6} lg={3}>
        <Link to={ROUTES.COMPANIES.absolutePath}>
          <CardMain  name={'Empresas'} image={company}/>
        </Link>
      </Col>
        <Col xs={6} md={5} lg={3}>
          <Link to={ROUTES.SERVICES.absolutePath}>
            <CardMain name={'Servicios'} image={service} />
          </Link>

        </Col>
        <Col xs={6} md={5} lg={3}>
          <Link to={ROUTES.USERS.absolutePath}>
            <CardMain name={'Usuarios'} image={user} />
          </Link>
        </Col>
        <Col xs={6} md={5} lg={3}>
          <Link to={ROUTES.MEMBERS.absolutePath}>
            <CardMain name={'Socios'} image={member} />
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}

export default Main;
