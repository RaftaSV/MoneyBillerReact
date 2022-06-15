import Title from 'components/Atoms/Title';
import {StyleImage, StyleWrapper} from 'components/Molecules/CardServices/style';


const CardMain = ({ image, name}) => {
  return (
    <StyleWrapper >
      <StyleImage loading="lazy" src={image} />
      <Title>{name}</Title>
    </StyleWrapper>
    );
};

export default CardMain;
