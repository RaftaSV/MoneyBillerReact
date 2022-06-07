import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

export const StyleImage = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyleButton = styled(Button)`
  position: absolute;
  background:${({ theme }) => theme.colors.success};;
  color:${({ theme }) => theme.colors.warning};;
  min-width: auto;
  padding: 0;
  width:40px;
  height: 40px;
  right: 10px;
  top: 10px;
  border-radius: 50px;
  font-size: 18px;
`;
