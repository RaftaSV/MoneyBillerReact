import {useEffect} from 'react';


import { Row, Col } from 'react-grid-system';

import useQuery from 'hooks/useQuery';
import Button from 'components/Atoms/Button';
import Layout from 'components/Organisms/Layout';
import CardServices from '../components/Molecules/CardServices';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;


function Services() {
  const { data, loading, refresh } = useQuery('/Services');

  useEffect(() => {
    console.log({ data, loading });
    document.title = 'Services';
  }, [loading, data]);
  // <Button onClick={refresh}>Refresh</Button>
  return (
    <Layout>
      {loading ? (
        <p>
          <b>Loading...</b>
        </p>
      ) : (
        <Row>
          {data?.map(({ id, serviceName, DocumentInvoice }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <CardServices name={serviceName} image={`${baseUrl}/Images/Services/${id}.png`} DocumentInvoice={DocumentInvoice}/>
            </Col>
          ))}
        </Row>
      )}
      <div style={{ minHeight: '90vh' }} />
    </Layout>
  );
}

export default Services;
