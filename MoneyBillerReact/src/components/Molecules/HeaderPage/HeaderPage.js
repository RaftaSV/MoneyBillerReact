import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import {StyleActions, StyleButton, StyleWrapper} from './style';
import Add from '../../Atoms/Icons/Add';

const HeaderPage = ({ title, onRefresh, onAdd }) => {
  return (
    <StyleWrapper>
      <Title htmlTag="h1" size={75} lineHeight={75}>
        {title}
      </Title>

      <StyleActions>
        {onRefresh && <Button color="success" labelColor="white" onClick={onRefresh}>Refresh</Button>}
        {onAdd && <StyleButton labelColor="white" onClick={onAdd}><Add/></StyleButton>}
      </StyleActions>
    </StyleWrapper>
  );
};

export default HeaderPage;
