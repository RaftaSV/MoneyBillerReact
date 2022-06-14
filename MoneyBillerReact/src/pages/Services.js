import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import {useEffect, useState} from 'react';
import { Row, Col } from 'react-grid-system';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import CardServices from 'components/Molecules/CardServices';
import ModalService from 'components/Molecules/ModalServices/ModalServices';
import useMutation from '../hooks/useMutation';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


function Services() {

  const baseUrl = `${process.env.REACT_APP_API_URL}/v1/Images/Services`;

  const { data, loading, refresh } = useQuery('/Services');
  const { visible, onToggle } = useModal();
  const [serviceEdit, setServiceEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible } = useModal();

  const [deleteService] = useMutation(`/Services`, {
    refresh,
    method: 'delete',
  });

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

  const onDelete = (id) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: 'Desea eliminar este servicio?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
      background: 'rgba(100, 100, 120, 0.8)',
      color: '#ffffff'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteService({}, id).then();
      }
    })
  };

  useEffect(() => {
    console.log({ data, loading });
    document.title = 'Services';
  }, [loading, data]);
  return (
    <Layout>
      <HeaderPage title="Servicios" onAdd={onToggle} />
      {loading ? (
       <Loader />
      ) : (
        <Row>
          {data?.map(( Service) => {
            const {id, serviceName, DocumentInvoice,image} = Service;
            return (
              <Col key={id} xs={12} md={6} lg={4}>
                <CardServices
                  name={serviceName}
                  image={`${baseUrl}/${id}${image}`}
                  DocumentInvoice={DocumentInvoice}
                  onEdit={() => onEdit(Service)}
                  onRemove={()=> onDelete(id)}
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
