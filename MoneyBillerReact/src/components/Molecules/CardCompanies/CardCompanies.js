import Title from 'components/Atoms/Title';
import { StyleImage, StyleWrapper } from './style';

const CardCompanies = ({ image, name, address, tel, email, onClick}) => {
  return (
    <StyleWrapper onClick = {onClick}>
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
      <Title size={18}> Tel: {tel}</Title>
      <Title size={18}>Email: {email}</Title>
      <Title size={18}> Address: {address}</Title>
    </StyleWrapper>
    );
};

export default CardCompanies;
