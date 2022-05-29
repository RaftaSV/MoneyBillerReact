import LoginMolecule from 'components/Molecules/Login';
import LayoutLogin from 'components/Organisms/LayautLogin';

function Login() {
  document.title = 'Login';
return(
    <LayoutLogin>
      <LoginMolecule/>
    </LayoutLogin>
)
}


export  default Login;
