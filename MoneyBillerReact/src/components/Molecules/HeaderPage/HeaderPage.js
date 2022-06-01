import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { StyleActions, StyleWrapper } from './style';

const HeaderPage = ({ title, onRefresh, onAdd }) => {
  return (
    <StyleWrapper>
      <Title htmlTag="h1" size={75} lineHeight={75}>
        {title}
      </Title>

      <StyleActions>
        {onRefresh && <Button color="success" labelColor="white" onClick={onRefresh}>Refresh</Button>}
        {onAdd && <Button labelColor="white" onClick={onAdd}>Add</Button>}
      </StyleActions>
    </StyleWrapper>
  );
};

export default HeaderPage;
