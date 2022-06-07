import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import {useEffect, useState} from 'react';
import { Row, Col } from 'react-grid-system';
import Button from 'components/Atoms/Button';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import CardServices from 'components/Molecules/CardServices';
import ModalService from 'components/Molecules/ModalServices/ModalServices';

function Services() {

  const baseUrl = `${process.env.REACT_APP_API_URL}/v1/Images/Services`;

  const { data, loading, refresh } = useQuery('/Services');
  const { visible, onToggle } = useModal();
  const [serviceEdit, setServiceEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible } = useModal();

  const onEdit = (Service) => {
    onVisible();
    setServiceEdit(Service);
    onToggle();
  };

  const onClose = () => {
    onHidden();
    setServiceEdit(null);
    onToggle();
  };

  useEffect(() => {
    console.log({ data, loading });
    document.title = 'Services';
  }, [loading, data]);
  return (
    <Layout>
      <HeaderPage title="Services" onAdd={onToggle} />
      <Button onClick={refresh}>Refresh</Button>
      {loading ? (
       <Loader />
      ) : (
        <Row>
          {data?.map(( Service) => {
            const {id, serviceName, DocumentInvoice} = Service;
            return (
              <Col key={id} xs={12} md={6} lg={4}>
                <CardServices
                  name={serviceName}
                  image={`${baseUrl}/${id}.png`}
                  DocumentInvoice={DocumentInvoice}
                  onEdit={() => onEdit(Service)}
                />
              </Col>
            );
          })}
        </Row>
      )}
      <ModalService Service={serviceEdit} isOpen={visible} isUpdate={isUpdate} onRefresh={refresh} onCancel={onClose} />
    </Layout>
  );
}

export default Services;
