import axios from 'axios';
import {Form, DivLeft, DivRight, DivButton} from './style';
import Swal from 'sweetalert2';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Textarea from 'components/Atoms/Textarea';
import withReactContent from 'sweetalert2-react-content';
import Title from '../../Atoms/Title';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;


const AddUserModal = ({ isOpen, onCancel , user}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const MySwal = withReactContent(Swal);
    axios.post(`${baseUrl}/Users`, {
        headers: {
          'Content-Type': 'application/json',
        },
      name: data.name,
      lastName: data.lastName,
      email : data.email,
      company: data.company,
      DUI : data.DUI,
      passwords: data.passwords,
      tel: data.tel,
      address:data.address,
      typeUser: 'user'
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
      <Modal width={400} isOpen={isOpen} onCancel={onCancel} title="Registro de usuarios">
        <Form method="POST" onSubmit={onSubmit}>
          <DivLeft>
            <Title size={17}>Nombres</Title>
            <Input name="name" placeholder="Nombres" type="text" id={'nombre'} required/>
            <Title size={17}>Apellidos</Title>
            <Input name="lastName" placeholder="Apellidos" type="text" required/>
            <Title size={17}>Correo electronico</Title>
            <Input name="email" placeholder="Correo electronico" type="email" required/>
            <Title size={17}>DUI</Title>
            <Input name="DUI" placeholder="DUI: 0000000000"
                   keyboardType='numeric'
                   maxLength={9}
                   pattern="[0-9]"
                   required/>
          </DivLeft>
          <DivRight>
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

export default AddUserModal;
