import axios from 'axios';
import { Style } from './style';
import Swal from 'sweetalert2';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Textarea from 'components/Atoms/Textarea';
import withReactContent from 'sweetalert2-react-content';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;


const AddMemberModal = ({ isOpen, onCancel }) => {

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
      .then(
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
      <Style onSubmit={onSubmit}>
        <Input name="name" placeholder="Nombres" type="text"  required />
        <Input name="lastName" placeholder="Apellidos" type="text" required />
        <Input name="email" placeholder="Correo electronico" type="email" required />
        <Input name="DUI" placeholder="DUI: 0000000000" type="text" required />
        <Input name="Company" placeholder="nombre de la empresa" type="text" required />
        <Input name="passwords" placeholder="Contraseña" type="password" required />
        <Input name="tel" placeholder="telefono" type="tel" required />
        <Textarea name="address" placeholder="Direccion" required />
        <Button type="submit">Save</Button>
      </Style>
      <Button hidden='hidden' id={'cerrar'} onClick={onCancel}></Button>
    </Modal>

  );
};

export default AddMemberModal;