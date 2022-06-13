import styled from 'styled-components';


export const StyleInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding: 0 10px;
  margin-bottom: 10;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0 0 2 2px ${({ theme }) => theme.colors.shadowInput};

`;
