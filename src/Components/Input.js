import { MDBInput } from 'mdb-react-ui-kit';

function Input({ wrapperClass, label, id, type, size }) {
  return (
    <MDBInput
      wrapperClass={wrapperClass}
      label={label}
      id={id}
      type={type}
      size={size} />
  );
}

export default Input;
