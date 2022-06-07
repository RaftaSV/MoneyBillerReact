import Title from 'components/Atoms/Title';
import {StyleButton, StyleImage, StyleWrapper} from './style';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';

const CardServices = ({ image, name, DocumentInvoice,onEdit }) => {
  return (
    <StyleWrapper>
      <StyleButton onClick={onEdit}>
        <PencilFilled />
      </StyleButton>
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
      <h2> Document: {DocumentInvoice}</h2>
    </StyleWrapper>
  );
};

export default CardServices;
