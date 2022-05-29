import { useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import useQuery from 'hooks/useQuery';
import Layout from 'components/Organisms/Layout';
import CardCompanies from 'components/Molecules/CardCompanies';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;
// const { data, loading, refresh } = useQuery('/Companies');
function Companies() {
  const { data, loading } = useQuery('/Companies');
  useEffect(() => {
    console.log({ data, loading });
    document.title='Companies';
  }, [loading, data]);
const viewName = async (name) => {
  const mySwal = withReactContent(Swal);
  await mySwal.fire({
    title: 'Clicking',
    text: `you are clicking company ${name}`,
    icon: 'success',
    confirmButtonText: 'Ok',
  });
}
 // <Button onClick={refresh}>Refresh</Button>
  return (
    <Layout>
      {loading ? (
        <p>
          <b>Loading...</b>
        </p>
      ) : (
        <Row>
          {data?.map(({ id, name, address, tel, email }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <CardCompanies  name={name} image={`${baseUrl}/Images/Companies/${id}.png`}  address={address} tel={tel} email={email} onClick={() => viewName(name)}/>
            </Col>
          ))}
        </Row>
      )}
      <div style={{ minHeight: '90vh' }} />
    </Layout>
  );
}

export default Companies;
