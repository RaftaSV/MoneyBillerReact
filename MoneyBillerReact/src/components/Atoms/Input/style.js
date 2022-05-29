import styled from 'styled-components';

export const StyleInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 16px;
  border: none;
  padding: 0 12px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadowInput};
`;
