import LoginMolecule from 'components/Molecules/Login';
import LayoutLogin from 'components/Organisms/LayautLogin';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AddUserModal } from 'components/Molecules/ModalUser';
import { AddMemberModal as Member } from 'components/Molecules/ModalMember';
import { AddCompanyModal} from 'components/Molecules/ModalCompany';
import useModal from 'hooks/useModal';

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
  const { visible, onToggle } = useModal();
  const { visible: visibleUser, onToggle: onToggleUser } = useModal();
  const { visible: visibleCompany, onToggle: onToggleCompany } = useModal();
  document.title = 'Login';
return(
    <LayoutLogin>

      <LoginMolecule onClickUser={()=> onToggleUser()}
                     onClickMember={()=>onToggle()}
                     onClickCompany={()=>onToggleCompany()}/>

      <Member isOpen={visible} onCancel={onToggle} />
      <AddUserModal isOpen={visibleUser} onCancel={onToggleUser} />
      <AddCompanyModal isOpen={visibleCompany} onCancel={onToggleCompany} />
    </LayoutLogin>
)
}


export default Login;
