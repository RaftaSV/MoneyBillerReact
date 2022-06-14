import Title from 'components/Atoms/Title';
import {StyleButton, StyleButtonDelete, StyleImage, StyleWrapper} from './style';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';
import Delete from 'components/Atoms/Icons/Delete';

const CardServices = ({ image, name, DocumentInvoice,onEdit,onRemove }) => {
  return (
    <StyleWrapper>
      <StyleButton onClick={onEdit}>
        <PencilFilled />
      </StyleButton>
      <StyleButtonDelete onClick={onRemove}>
        <Delete/>
      </StyleButtonDelete>
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
      <h2> Document: {DocumentInvoice}</h2>
    </StyleWrapper>
  );
};

export default CardServices;
