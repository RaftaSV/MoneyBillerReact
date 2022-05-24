import Title from 'components/Atoms/Title';
import { StyleImage, StyleWrapper } from './style';

const CardCompanies = ({ image, name, address, tel }) => {
  return (
    <StyleWrapper>
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
      <h2> address: {address}</h2>
      <h2> tel: {tel}</h2>
    </StyleWrapper>
  );
};

export default CardCompanies;
