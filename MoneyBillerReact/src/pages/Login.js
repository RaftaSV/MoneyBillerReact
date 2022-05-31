import LoginMolecule from 'components/Molecules/Login';
import LayoutLogin from 'components/Organisms/LayautLogin';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const click = async (element) => {
  await MySwal.fire({
    title: 'Info',
    text: `you are clicking ${element.toString()}`,
    icon: 'info',
    confirmButtonText: 'Ok',
    color: '#ffffff',
    background: 'rgba(100, 100, 120, 0.8)',
  });
}
function Login() {
  document.title = 'Login';
return(
    <LayoutLogin>
      <LoginMolecule onClickUser={()=>click('User')}
                     onClickMember={()=>click('Member')}
                     onClickCompany={()=>click('Company')}/>
    </LayoutLogin>
)
}


export  default Login;
