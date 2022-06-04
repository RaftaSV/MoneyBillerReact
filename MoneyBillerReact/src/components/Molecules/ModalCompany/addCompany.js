import axios from 'axios';
import {Form, DivLeft, DivRight, DivButton} from '../ModalUser/style';
import Swal from 'sweetalert2';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Textarea from 'components/Atoms/Textarea';
import withReactContent from 'sweetalert2-react-content';
import Title from 'components/Atoms/Title';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;


const AddCompanyModal = ({ isOpen, onCancel}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const MySwal = withReactContent(Swal);
    axios.post(`${baseUrl}/Companies`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then (
        async (response) => {

          if(response.status===200) {
            await MySwal.fire({
              title: 'Success',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'Ok',
              background: 'rgba(100, 100, 120, 0.8)',
              color: '#ffffff'
            }).then(result=> {
              if (result.value) {
                // Hicieron click en "Sí"
              document.getElementById('cerrar').click();
              }
            });
          }
        },
        async (error) => {
          await MySwal.fire({

            icon: 'error',
            title: 'Oops...',
            text: 'Error Al registrar',
            background: 'rgba(100, 100, 120, 0.8)',
            color: '#ffffff',
            confirmButtonText: 'Ok',
          });
        }
      );
  }
    return (
      <Modal width={400} isOpen={isOpen} onCancel={onCancel} title="Registro de Empresa">
        <Form method="POST" onSubmit={onSubmit}>
          <DivLeft>
            <Title size={17}>Foto</Title>
            <Input name="file"  type="file"  required/>
            <Title size={17}>Nombre</Title>
            <Input name="name" placeholder="Nombre" type="text" id={'nombre'} required/>
            <Title size={17}>Correo electronico</Title>
            <Input name="email" placeholder="Correo electronico" type="email" required/>
          </DivLeft>
          <DivRight>
            <Title size={17}>NIT</Title>
            <Input name="NIT" placeholder="DUI: 0000000000"
                   type='number'
                   required/>
            <Title size={17}>Contraseña</Title>
            <Input name="passwords" placeholder="Contraseña" type="password" required/>
            <Title size={17}>Telefono</Title>
            <Input name="tel" placeholder="telefono" type="tel" required/>
            <Title size={17}>Direccion</Title>
            <Textarea name="address" placeholder="Direccion" required/>
          </DivRight>
          <DivButton>
            <Button type="submit">Save</Button>
          </DivButton>
        </Form>
        <Button hidden='hidden' id={'cerrar'} onClick={onCancel}></Button>
      </Modal>
    );

};

export default AddCompanyModal;
