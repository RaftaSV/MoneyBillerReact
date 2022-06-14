import useMutation from 'hooks/useMutation';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import {Form, DivLeft, DivRight} from './style'


const ModalService = ({ isOpen, onCancel, onRefresh, isUpdate = false, Service = null }) => {
  const [createOrUpdateServices, { loading: loadingAddOrUpdateServices }] = useMutation(isUpdate ? `/Services/${Service?.id}` : '/Services', {
    method: isUpdate ? 'put' : 'post', // post = create, put = update
    headers : {
      'Content-Type': 'multipart/form-data'
    },
    refresh: async () => {
      onCancel();
      await onRefresh();
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await createOrUpdateServices({
      variables: {
        ...data,
      }
    });
  };

  return (
    <Modal
      width={400}
      isOpen={isOpen}
      onCancel={onCancel}
      title={isUpdate ? 'Actualizar Servicio' : 'Agregar Servicio'}
      okText={isUpdate ? 'Actualizar' : 'Guardar'}
      okProps={{
        type: 'submit',
        form: 'form-service',
        loading: loadingAddOrUpdateServices
      }}
    >
      <Form id="form-service" method="POST" onSubmit={onSubmit}>
        <DivLeft>
         <Title size={13}> Nombre del servicio</Title>
        <Input defaultValue={Service?.serviceName} name="serviceName" placeholder="Nombre servicio" type="text" required  />
          <Title size={13}> Tipo documento</Title>
          <Input defaultValue={Service?.DocumentInvoice} name="DocumentInvoice" placeholder="Ejemplo: DUI, Tel" type="text" required />
          <Title size={13}>URL buscar facturas </Title>
          <Input defaultValue={Service?.invoiceUrl} name="invoiceUrl" placeholder="Url buscar factura" type="text" required />
          <Title size={13}>Metodo de acceso</Title>
          <Input defaultValue={Service?.invoiceMethod} name="invoiceMethod" placeholder="Metodo ejemplo: post, get" type="text" required />
          <Title size={13}>fecha vencimiento</Title>
          <Input defaultValue={Service?.nameInvoiceDateJSON} name="nameInvoiceDateJSON" placeholder="Ejemplo: date, fecha" type="text" required />
          <Title size={13}>Nombre en factura</Title>
          <Input defaultValue={Service?.nameInvoiceJSON} name="nameInvoiceJSON" placeholder=" Ejemplo: name" type="text" required />
        </DivLeft>
        <DivRight>
          <Title size={13}>Nombre total</Title>
          <Input defaultValue={Service?.nameInvoiceTotalJSON} name="nameInvoiceTotalJSON" placeholder="Obtener total fac ejemplo: total" type="text" required />
          <Title size={13}>Obtener id</Title>
          <Input defaultValue={Service?.numberInvoice} name="numberInvoice" placeholder="fact Ejemplo: ID, _id" type="text" required />
          <Title size={13}>URL pagar</Title>
        <Input defaultValue={Service?.payInvoiceUrl} name="payInvoiceUrl" placeholder="Url pagar factura" type="text" required />
          <Title size={13}>Metodo de acceso</Title>
        <Input defaultValue={Service?.payInvoiceMethod} name="payInvoiceMethod" placeholder="Metodo ejemplo: post, put" type="text" required />
          <Title size={13}>Imagen</Title>
        <Input name="file"  type="file" accept="image/png,PNG" />
        </DivRight>
      </Form>



    </Modal>
  );
};

export default ModalService;
