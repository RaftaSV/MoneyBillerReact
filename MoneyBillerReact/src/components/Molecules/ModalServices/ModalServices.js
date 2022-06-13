import useMutation from 'hooks/useMutation';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';

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
      <form id="form-service" method="POST" onSubmit={onSubmit}>
        <div>

        <Input defaultValue={Service?.serviceName} name="serviceName" placeholder="Nombre servicio" type="text" required  />

          <Input defaultValue={Service?.DocumentInvoice} name="DocumentInvoice" placeholder="Numero de documento" type="text" required />
        </div>
        <br/>

        <div>
        <Input defaultValue={Service?.invoiceUrl} name="invoiceUrl" placeholder="Url buscar factura" type="text" required />
          <Input defaultValue={Service?.invoiceMethod} name="invoiceMethod" placeholder="Metodo eje: post, get" type="text" required />
      </div>
        <br/>

        <div>
          <Input defaultValue={Service?.nameInvoiceDateJSON} name="nameInvoiceDateJSON" placeholder="Nombre Fecha vencimiento" type="text" required />
          <Input defaultValue={Service?.nameInvoiceJSON} name="nameInvoiceJSON" placeholder="Obtener nombre fac eje: name" type="text" required />
        </div>
        <br/>

        <div>
          <Input defaultValue={Service?.nameInvoiceTotalJSON} name="nameInvoiceTotalJSON" placeholder="Obtener total fac eje: total" type="text" required />
          <Input defaultValue={Service?.numberInvoice} name="numberInvoice" placeholder="Obtener id fac eje: ID, _id" type="text" required />
        </div>
        <br/>

        <div>
          <Input defaultValue={Service?.payInvoiceUrl} name="payInvoiceUrl" placeholder="Url pagar factura" type="text" required />
          <Input defaultValue={Service?.payInvoiceMethod} name="payInvoiceMethod" placeholder="Metodo eje: post, put" type="text" required />
        </div>
        <br/>

        <div>
          <Input name="file"  type="file" accept="image/png,PNG" />
        </div>
        <br/>



      </form>



    </Modal>
  );
};

export default ModalService;
