import Title from 'components/Atoms/Title';
import {StyleButtonDelete, StyleImage, StyleWrapper, StyleButton} from 'components/Molecules/CardServices/style';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';
import Delete from 'components/Atoms/Icons/Delete';

const CardCompanies = ({ image, name, address, tel, email, onClick, onEdit, onRemove}) => {
  return (
    <StyleWrapper onClick = {onClick}>
      <StyleButton onClick={onEdit}>
        <PencilFilled />
      </StyleButton>
      <StyleButtonDelete onClick={onRemove}>
        <Delete/>
      </StyleButtonDelete>
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
      <Title size={18}> Tel: {tel}</Title>
      <Title size={18}>Email: {email}</Title>
      <Title size={18}> Address: {address}</Title>
    </StyleWrapper>
    );
};

export default CardCompanies;
