import LibModal from 'react-modal';
import {customStyles, StyleBody, StyleCloseBtn, StyleFooter, StyleTitle} from './style';
import Title from '../Title';
import Button from '../Button';

const Modal = ({
  isOpen,
  children,
  onCancel,
  title,
  okText = 'Ok',
  okProps = {},
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
      <StyleFooter>
        <Button {...okProps}>{okText}</Button>
      </StyleFooter>
    </LibModal>
  );
};

export default Modal;
