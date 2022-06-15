import axios from 'axios';
import Swal from 'sweetalert2';
import {useState} from 'react';
import {ROUTES} from 'config';
import Title from 'components/Atoms/Title';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import withReactContent from 'sweetalert2-react-content';
import {StyleImageAvatar, Style, FormContainer,StyleImageLogo, StyleRegisterUser} from './style';



const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const SignInForm = ({onClickUser, onClickMember, onClickCompany}) => {

  const MySwal = withReactContent(Swal);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const onChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Username === '' || Password === '') {
        await MySwal.fire({
          title: 'Error',
          text: 'Por favor llena todos los campos',
          icon: 'error',
          confirmButtonText: 'Ok',
          color: '#ffffff',
          background: 'rgba(100, 100, 120, 0.8)',        });
      } else {
        axios
          .post(`${baseUrl}/Login`, {
            headers: {
              'Content-Type': 'application/json',
            },
            user: Username,
            pass: Password,
          })
          .then(
            async (response) => {
              if(response.data.typeUser==='admin') {
                window.location.assign(ROUTES.MAIN.absolutePath);
              }
            },
            async (error) => {
              await MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o Contraseña invalida',
                background: 'rgba(100, 100, 120, 0.8)',
                color: '#ffffff'
              });
            }
          );
      }
    }
  return (
    <FormContainer>
      <StyleImageLogo loading='Lazy' src={'LogoProyect.png'}/>
    <Style onSubmit={handleSubmit}>
      <StyleImageAvatar loading='lazy' src={'Avatar.png'} />
     <Title size={18}>Usuario</Title>
      <Input placeholder={'Digite su usuario'}  type="text" onChange={onChangeUserName}/>
      <Title size={18}>Contraseña</Title>
      <Input placeholder={'Digite su contraseña'} type="password"  onChange={onChangePassword} />
      <Button type="submit">INGRESAR</Button>
    </Style>
      <StyleRegisterUser>
        <Button color={'transparent'}  onClick={onClickUser}> Registrar usuario</Button>
        <Button  color={'transparent'} onClick={onClickMember}  > Registrar socio</Button>
        <Button color={'transparent'} onClick={onClickCompany} > Registrar empresa</Button>
      </StyleRegisterUser>
      </FormContainer>

  );
};

export default SignInForm;
