import styled from 'styled-components';

export const StyleInput = styled.textarea`
  width: 200px;
  height: 40px;
  max-width: 200px;
  max-height: 80px;
  border-radius: 16px;
  border: none;
  padding: 11px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadowInput};
`;
