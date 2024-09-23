import { MDBBtn } from 'mdb-react-ui-kit';

function Button({className, size, text, type, datamdbtarget, ariacontrols, ariaexpanded, arialabel, datamdbcollapseinit, onClick}) {
  return (
    <MDBBtn className={className} data-mdb-target={datamdbtarget} aria-controls={ariacontrols} aria-expanded={ariaexpanded} aria-label={arialabel} type={type} size={size} data-mdb-collapse-init={datamdbcollapseinit} onClick={onClick}>{text}</MDBBtn>
  );
}

export default Button;
