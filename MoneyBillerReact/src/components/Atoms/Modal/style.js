import styled from 'styled-components';
import Button from '../Button';

export const StyleBody = styled.div`
  position: center;
  height: 100%;
  width: 100%;
  min-width: 800px;
  max-width: 100px;
  min-height: 400px;
  max-height: 400px;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.nav};
  display: flex;
  border: 5px;
  justify-content: space-between;
  z-index: ${({ theme }) => theme.zIndex.max} ;
 ;

`;

export const StyleTitle = styled.div`
  position: relative;
  height: 25%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.nav};
  padding-left: 20px;
`;

export const StyleCloseBtn = styled(Button)`
  position: fixed;
  right: 20px;
  top: -1px;
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
    backdropFilter: 'saturate(100%) blur(25px)'
  },
  content: {
    top: '54%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 19,
  }
};
export const StyleFooter = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 5px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.nav};
`;


