import Title from 'components/Atoms/Title';
import { StyleImage, StyleWrapper } from './style';

const CardServices = ({ image, name, DocumentInvoice }) => {
  return (
    <StyleWrapper>
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
      <h2> Document: {DocumentInvoice}</h2>
    </StyleWrapper>
  );
};

export default CardServices;
