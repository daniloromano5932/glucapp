import {MDBIcon} from 'mdb-react-ui-kit';

function Logo() {
  return (
    <div className='d-flex flex-row mt-2'>
      <MDBIcon className="fas fa-laptop-medical fa-3x me-3 health-icon"/>
      <span className="h1 fw-bold mb-0">GlucApp</span>
    </div>
  );
}

export default Logo;
