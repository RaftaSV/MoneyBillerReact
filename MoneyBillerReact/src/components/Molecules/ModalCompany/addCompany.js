import Title from 'components/Atoms/Title';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Textarea from 'components/Atoms/Textarea';
import {Form, DivLeft, DivRight } from '../ModalUser/style';
import useMutation from 'hooks/useMutation';

     const AddCompanyModal = ({ isOpen, onCancel, onRefresh, isUpdate = false, company= null, }) => {
     const [ createOrUpdateCompany, { loading: loadingAddOrUpdateCompany }] = useMutation(isUpdate ? `/Companies/${company?.id}` : '/Companies', {
        method: isUpdate ? 'put' : 'post', // post = create, put = update
        headers : {
        'Content-Type': 'multipart/form-data'
      },
        refresh: async () => {
        onCancel();
        await onRefresh();
      }
      });

        const onSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        await createOrUpdateCompany({
        variables: {
        ...data,
      }
      });
      };

        return (
        <Modal
        width={400}
        isOpen={isOpen}
        onCancel={onCancel}
        title={isUpdate ? 'Actualizar empresa' : 'Agregar empresa'}
        okText={isUpdate ? 'Actualizar' : 'Guardar'}
        okProps={{
        type: 'submit',
        form: 'form-Company',
        loading: loadingAddOrUpdateCompany
      }}
        >
        <Form id="form-Company" method="POST" onSubmit={onSubmit}>
          <DivLeft>
            <Title size={17}>Foto</Title>
            <Input name="file"  type="file" accept="image/png,PNG" required/>
            <Title size={17}>Nombre</Title>
            <Input name="name" placeholder="Nombre" type="text" id={'nombre'} defaultValue={company?.name} required/>
            <Title size={17}>Correo electronico</Title>
            <Input name="email" placeholder="Correo electronico" type="email" defaultValue={company?.email} required/>
          </DivLeft>
          <DivRight>
            <Title size={17}>NIT</Title>
            <Input name="NIT" placeholder="DUI: 0000000000"
                   type='number'
                   defaultValue={company?.NIT}
                   required/>
            <Title size={17}>Contraseña</Title>
            <Input name="passwords" placeholder="Contraseña" type="password" required/>
            <Title size={17}>Telefono</Title>
            <Input name="tel" placeholder="telefono" type="tel" defaultValue={company?.tel} required/>
            <Title size={17}>Direccion</Title>
            <Textarea name="address" placeholder="Direccion"  defaultValue={company?.address} required/>
          </DivRight>
        </Form>
        <Button hidden='hidden' id={'cerrar'} onClick={onCancel}></Button>
      </Modal>
    );

};

export default AddCompanyModal;
