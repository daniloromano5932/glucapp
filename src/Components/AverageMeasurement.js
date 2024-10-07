import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';

function AverageMeasurement({name, value}) {
  return (
    <MDBContainer data-testid='MDBContainer' className="py-5">
      <MDBRow data-testid='MDBRow' className='g-0'>
        <MDBCol data-testid='MDBCol' lg="5">
          <MDBCard data-testid='MDBCard' className="mb-4">
            <MDBCardBody data-testid='MDBCardBody' className='center' >
              <h3>{name}</h3>
              <h1 className='average-measurement'>
                {value}
              </h1>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AverageMeasurement;