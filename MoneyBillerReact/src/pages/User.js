import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import {useEffect, useState} from 'react';
import { Row, Col } from 'react-grid-system';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import { AddUserModal } from 'components/Molecules/ModalUser';
import useMutation from '../hooks/useMutation';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import CardUser from 'components/Molecules/CardUser';


function Users() {

  const { data, loading, refresh } = useQuery('/Users');
  const { visible, onToggle } = useModal();
  const [userEdit, setUserEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible } = useModal();

  const [deleteUser] = useMutation(`/Users`, {
    refresh,
    method: 'delete',
  });

  const onEdit = (User) => {
    onVisible();
    setUserEdit(User);
    onToggle();
  };

  const onClose = () => {
    onHidden();
    setUserEdit(null);
    onToggle();
  };

  const onDelete = (id) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: 'Desea eliminar este usuario?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
      background: 'rgba(100, 100, 120, 0.8)',
      color: '#ffffff'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteUser({}, id).then();
      }
    })
  };

  useEffect(() => {
    console.log({ data, loading });
    document.title = 'User';
  }, [loading, data]);
  return (
    <Layout>
      <HeaderPage title="Usuarios" onAdd={onToggle} />
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {data?.map(( user) => {
            const {id, name, lastName,address,DUI,tel,email} = user;
            return (
              <Col key={id} xs={9} md={6} lg={4}>
                <CardUser
                  name={name}
                  lastName={lastName}
                  Address={address}
                  DUI={DUI}
                  tel={tel}
                  email={email}
                  onEdit={() => onEdit(user)}
                  onRemove={()=> onDelete(id)}
                />
              </Col>
            );
          })}
        </Row>
      )}
      <AddUserModal user={userEdit} isOpen={visible} isUpdate={isUpdate} onRefresh={refresh} onCancel={onClose} />
    </Layout>
  );
}

export default Users;
