import LibModal from 'react-modal';
import {customStyles, StyleBody, StyleCloseBtn, StyleTitle} from './style';
import Title from '../Title';

const Modal = ({
  isOpen,
  children,
  onCancel,
  title,
  width = 450,
  contentStyle = customStyles.content,
  closeButton = true,
  ...restProps
}) => {
  return (
    <LibModal style={{ ...customStyles, content: contentStyle }} isOpen={isOpen} {...restProps}>
      <StyleTitle>
        {title && <Title size={27}>{title}</Title>}
        {closeButton && (
          <StyleCloseBtn labelColor="text" color="transparent" onClick={onCancel}>
            X
          </StyleCloseBtn>
        )}
      </StyleTitle>
      <StyleBody
        style={{
          maxWidth: width
        }}
      >
        {children}
      </StyleBody>
    </LibModal>
  );
};

export default Modal;
