import styled from 'styled-components';

export const StyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 0;
`;

export const StyleActions = styled.div`
  button {
    margin-left: 10px;
  }
`;

export const StyleButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  background:${({ theme }) => theme.colors.primary};
  border: none;
  color:${({ theme }) => theme.colors.background};
  min-width: auto;
  padding: 0;
  width:40px;
  height: 40px;
  right: 10px;
  top: 10px;
  border-radius: 60px;
  font-size: 40px;
  cursor: pointer;
   &:hover {
   background:blue;
  }
`;
