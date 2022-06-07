import styled from 'styled-components';


export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  display: flex;
  max-width: 800px;
  align-items: center;
  align-content: center;
  min-height: 500px;
  box-shadow: ${({ theme }) => theme.colors.boxshadow};
  margin-top: 20px;
`;
export const Style = styled.form`
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.tranparent};
  border-radius: 16px;
  padding:10px;
  display: flex;
  border: 2px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: -10%;
  margin-left: 20%;
  @media screen and (min-width: 768px) {
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: -5%;
    margin-left: 5%;
  }
`;

export const StyleImageAvatar = styled.img`
  border-radius: 12px;
  min-width: 170px;
  max-width: 190px;
`;
export const StyleRegisterUser = styled.div`
  display: flex;
  margin-top: 105%;
  min-width: 600px;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  margin-left: -88%;
  @media screen and (min-width: 768px) {
    margin-left: -85%;
    display:inline;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 60%;
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
