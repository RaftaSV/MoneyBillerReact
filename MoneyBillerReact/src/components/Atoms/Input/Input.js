import {StyleImput} from './style';

const Input = ({ placeholder, ...props }) => {
  return <StyleImput placeholder = {placeholder} {...props}
/>
};

export default Input;
