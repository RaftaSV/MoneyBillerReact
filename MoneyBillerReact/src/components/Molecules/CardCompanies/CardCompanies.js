import Title from 'components/Atoms/Title';
import { StyleImage, StyleWrapper } from './style';

const CardCompanies = ({ image, name, address, tel, email }) => {
  return (
    <StyleWrapper>
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
      <h2> Address: {address}</h2>
      <h2> Tel: {tel}</h2>
      <h2>Email: {email}</h2>
    </StyleWrapper>
  );
};

export default CardCompanies;
