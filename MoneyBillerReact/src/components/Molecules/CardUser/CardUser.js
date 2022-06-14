import Title from 'components/Atoms/Title';
import {StyleButton, StyleButtonDelete, StyleWrapper} from './style';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';
import Delete from 'components/Atoms/Icons/Delete';

const CardUser = ({ name,lastName,email,DUI,tel,Address,onEdit,onRemove }) => {
  return (
    <StyleWrapper>
      <StyleButton onClick={onEdit}>
        <PencilFilled />
      </StyleButton>
      <StyleButtonDelete onClick={onRemove}>
        <Delete/>
      </StyleButtonDelete>
      <Title size={20}>Nombres: {name}</Title>
      <h2> Apellidos: {lastName}</h2>
      <h2> DUI: {DUI}</h2>
      <h2> Correo: {email}</h2>
      <h2> Tel: {tel}</h2>
      <h2> Direccion: {Address}</h2>
    </StyleWrapper>
  );
};

export default CardUser;
