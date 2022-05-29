import styled from 'styled-components';

export const StyleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px 0;
  cursor: pointer;
  max-width: 275px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyleImage = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
