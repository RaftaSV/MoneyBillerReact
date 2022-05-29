import styled from 'styled-components';

export const StyleImput = styled.input`
  width: 100px;
  height: 45px;
  border-radius: 16px;
  border: none;
  padding: 0 12px;
  margin-bottom: 20px;
  color: ${({theme})=> theme.color.text};
  background: ${({theme})=> theme.color.input};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadowInput};
`;
