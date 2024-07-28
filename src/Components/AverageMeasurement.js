import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';

function BasicExample({name, value}) {
  return (
    <MDBContainer className="py-5">
      <MDBRow className='g-0'>
        <MDBCol lg="5">
          <MDBCard className="mb-4">
            <MDBCardBody className='center' >
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

export default BasicExample;