import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import {useEffect, useState} from 'react';
import { Row, Col } from 'react-grid-system';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import { AddMemberModal } from 'components/Molecules/ModalMember';
import useMutation from '../hooks/useMutation';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import CardMember from 'components/Molecules/CardMembers';


function Members() {

  const { data, loading, refresh } = useQuery('/Users/member');
  const { visible, onToggle } = useModal();
  const [memberEdit, setMemberEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible } = useModal();

  const [deleteMember] = useMutation(`/Users`, {
    refresh,
    method: 'delete',
  });

  const onEdit = (member) => {
    onVisible();
    setMemberEdit(member);
    onToggle();
  };

  const onClose = () => {
    onHidden();
    setMemberEdit(null);
    onToggle();
  };

  const onDelete = (id) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: 'Desea eliminar este Socio?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
      background: 'rgba(100, 100, 120, 0.8)',
      color: '#ffffff'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteMember({}, id).then();
      }
    })
  };

  useEffect(() => {
    console.log({ data, loading });
    document.title = 'Member';
  }, [loading, data]);
  return (
    <Layout>
      <HeaderPage title="Socios" onAdd={onToggle} />
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {data?.map(( member) => {
            const {id, name, lastName,address,DUI,company,tel,email} = member;
            return (
              <Col key={id} xs={9} md={6} lg={4}>
                <CardMember
                  name={name}
                  lastName={lastName}
                  Address={address}
                  DUI={DUI}
                  Company={company}
                  tel={tel}
                  email={email}
                  onEdit={() => onEdit(member)}
                  onRemove={()=> onDelete(id)}
                />
              </Col>
            );
          })}
        </Row>
      )}
      <AddMemberModal user={memberEdit} isOpen={visible} isUpdate={isUpdate} onRefresh={refresh} onCancel={onClose} />
    </Layout>
  );
}

export default Members;
