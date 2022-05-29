import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  display: flex;
  max-width: 900px;
  align-items: center;
  margin-top: 10px;
  margin-left: 12%;
  min-height: 500px;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.colors.boxshadow};
`;
export const StyleWrapper = styled.div`
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.transparent};
  border-radius: 16px;
  padding:50px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const StyleImageAvatar = styled.img`
  border-radius: 12px;
  min-width: 170px;
  max-width: 190px;
`;

export const StyleImageLogo = styled.img `
  border-radius: 12px;
  min-width: 100px;
  max-width: 500px;
  padding: 20px;
  display: none;
  animation-direction: alternate-reverse;
  @media screen and (min-width: 768px) {
    display:flex;

  }
`;
