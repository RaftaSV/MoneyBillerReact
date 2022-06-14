
import {Form, DivLeft, DivRight} from './style';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import Textarea from 'components/Atoms/Textarea';
import useMutation from 'hooks/useMutation';



const AddUserModal = ({ isOpen, onCancel, onRefresh, isUpdate = false, user = null }) => {
  const [createOrUpdateUser, { loading: loadingAddOrUpdateUser }] = useMutation(isUpdate ? `/Users/${user?.id}` : '/Users', {
    method: isUpdate ? 'put' : 'post', // post = create, put = update

    refresh: async () => {
      onCancel();
      await onRefresh();
    }
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await createOrUpdateUser({
      variables: {
        ...data,
        typeUser:'user'
      }
    });
  };

  return (
    <Modal
      width={400}
      isOpen={isOpen}
      onCancel={onCancel}
      title={isUpdate ? 'Actualizar Usuario' : 'Agregar Usuario'}
      okText={isUpdate ? 'Actualizar' : 'Guardar'}
      okProps={{
        type: 'submit',
        form: 'form-User',
        loading: loadingAddOrUpdateUser
      }}
    >
        <Form id="form-User" method="POST" onSubmit={onSubmit}>
          <DivLeft>
            <Title size={17}>Nombres</Title>
            <Input name="name" placeholder="Nombres" type="text"  defaultValue={user?.name} required/>
            <Title size={17}>Apellidos</Title>
            <Input name="lastName" placeholder="Apellidos" type="text" defaultValue={user?.lastName}   required/>
            <Title size={17}>Correo electronico</Title>
            <Input name="email" placeholder="Correo electronico" type="text" defaultValue={user?.email} required/>
            <Title size={17}>DUI</Title>
            <Input name="DUI" placeholder="DUI: 0000000000"
                   Type='number'
                   maxLength={9}
                   defaultValue={user?.DUI}
                   required/>
          </DivLeft>
          <DivRight>
            <Title size={17}>Contraseña</Title>
            <Input name="passwords" placeholder="Contraseña" type="password" required/>
            <Title size={17}>Telefono</Title>
            <Input name="tel" placeholder="telefono" type="tel" defaultValue={user?.tel} required/>
            <Title size={17}>Direccion</Title>
            <Textarea name="address" placeholder="Direccion" defaultValue={user?.address} required/>
          </DivRight>
        </Form>
      </Modal>
    );

};

export default AddUserModal;
