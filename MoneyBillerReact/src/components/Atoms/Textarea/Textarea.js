import {StyleInput} from './style';

const Textarea = ({ placeholder, ...props }) => {
  return <StyleInput placeholder = {placeholder} {...props}
  />
};

export default Textarea;
