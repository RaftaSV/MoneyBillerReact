import styled from 'styled-components';
import Button from '../Button';

export const StyleBody = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 350px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.nav};
  display: flex;
  border: 2px;
  flex-direction: column;
  align-items: center;
`;

export const StyleCloseBtn = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
  min-width: auto;
  width: 40px;
  height: 40px;
  padding: 0;
  color:  ${({ theme }) => theme.colors.error};
  &:hover {
    background:  ${({ theme }) => theme.colors.white};;
  }
`;

export const customStyles = {
  overlay: {
    backdropFilter: 'saturate(190%) blur(20px)'
  },
  content: {
    top: '54%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  }

};


