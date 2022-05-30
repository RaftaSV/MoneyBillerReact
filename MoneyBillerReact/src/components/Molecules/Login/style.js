import styled from 'styled-components';


export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  display: flex;
  max-width: 800px;
  align-content: flex-start;
  align-items: center;
  min-height: 500px;
  box-shadow: ${({ theme }) => theme.colors.boxshadow};
  margin-top: 20px;
`;
export const StyleWrapper = styled.div`
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.transparent};
  border-radius: 16px;
  padding:10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: -20px;
`;

export const StyleImageAvatar = styled.img`
  border-radius: 12px;
  min-width: 170px;
  max-width: 190px;
`;
export const StyleRegistro = styled.div`
  min-width: 600px;

  align-items: center;
  @media screen and (min-width: 768px) {
    display:flex;
    justify-content: space-between;
    margin-left: -72%;
  }

`;
export const StyleImageLogo = styled.img `
  border-radius: 12px;
  min-width: 100px;
  max-width: 500px;
  padding: 20px;
  display: none;
  max-height: 470px;
  margin-top: -50px;
  animation-direction: alternate-reverse;
  @media screen and (min-width: 768px) {
    display:flex;

  }
`;
