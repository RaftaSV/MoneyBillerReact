import { useEffect } from 'react';
import { Row, Col } from 'react-grid-system';

import useQuery from 'hooks/useQuery';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Layout from 'components/Organisms/Layout';
import CardCompanies from 'components/Molecules/CardCompanies';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

function Home() {
  const { data, loading, refresh } = useQuery('/Companies');

  useEffect(() => {
    console.log({ data, loading });
  }, [loading, data]);

  return (
    <Layout>
      <Title htmlTag="h1" size={50}>
        Empresas
      </Title>
      <Button onClick={refresh}>Refresh</Button>

      {loading ? (
        <p>
          <b>Loading...</b>
        </p>
      ) : (
        <Row>
          {data?.map(({ id, name, address, tel }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <CardCompanies name={name} image={`${baseUrl}/Images/Companies/${id}.png`}  address={address} tel={tel} />
            </Col>
          ))}
        </Row>
      )}
      <div style={{ minHeight: '90vh' }} />
    </Layout>
  );
}

export default Home;
