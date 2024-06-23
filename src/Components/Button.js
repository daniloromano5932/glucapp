import {MDBBtn} from 'mdb-react-ui-kit';

function Button({className, size, text}) {
  return (
    <MDBBtn className={className} size={size}>{text}</MDBBtn>
  );
 
}

export default Button;