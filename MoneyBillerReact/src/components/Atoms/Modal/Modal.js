import LibModal from 'react-modal';
import { customStyles, StyleBody, StyleCloseBtn } from './style';
import Title from '../Title';

const Modal = ({
  isOpen,
  children,
  onCancel,
  title,
  width = 350,
  contentStyle = customStyles.content,
  closeButton = true,
  ...restProps
}) => {
  return (
    <LibModal style={{ ...customStyles, content: contentStyle }} isOpen={isOpen} {...restProps}>
      <StyleBody
        style={{
          maxWidth: width
        }}
      >
        {title && <Title size={27}>{title}</Title>}
        {closeButton && (
          <StyleCloseBtn labelColor="text" color="transparent" onClick={onCancel}>
            X
          </StyleCloseBtn>
        )}
        {children}
      </StyleBody>
    </LibModal>
  );
};

export default Modal;
