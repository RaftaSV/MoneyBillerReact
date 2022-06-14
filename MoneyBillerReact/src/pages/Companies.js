import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import {useEffect, useState} from 'react';
import { Row, Col } from 'react-grid-system';
import useMutation from 'hooks/useMutation';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import { AddCompanyModal } from 'components/Molecules/ModalCompany'

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import CardCompanies from '../components/Molecules/CardCompanies';


function Services() {

  const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

  const { data, loading, refresh } = useQuery('/Companies');
  const { visible, onToggle } = useModal();
  const [companyEdit, setCompanyEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible } = useModal();

  const [deleteCompany] = useMutation(`/Companies`, {
    refresh,
    method: 'delete',
  });

  const onEdit = (Company) => {
    onVisible();
    setCompanyEdit(Company);
    onToggle();
  };

  const onClose = () => {
    onHidden();
    setCompanyEdit(null);
    onToggle();
  };

  const onDelete = (id) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: 'Desea eliminar esta empresa?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
      background: 'rgba(100, 100, 120, 0.8)',
      color: '#ffffff'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteCompany({}, id).then();
      }
    })
  };

  useEffect(() => {
    console.log({ data, loading });
    document.title = 'Empresas';
  }, [loading, data]);
  return (
    <Layout>
      <HeaderPage title="Empresas" onAdd={onToggle} />
      {loading ? (
       <Loader />
      ) : (
        <Row>
          {data?.map((company) => {
            const{ id, name, address, tel, email, image } = company;
            return (
            <Col key={id} xs={10} md={6} lg={4}>
            <CardCompanies  name={name}
            image={`${baseUrl}/Images/Companies/${id}${image}`}
            address={address} tel={tel} email={email}
            onEdit={() => onEdit(company)}
            onRemove={()=> onDelete(id)}
            />
            </Col>
            );
          })}
        </Row>
      )}
      <AddCompanyModal company={companyEdit} isOpen={visible} isUpdate={isUpdate} onRefresh={refresh} onCancel={onClose} />
    </Layout>
  );
}

export default Services;
