import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardImage,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';

function BasicExample() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className='g-0'>
        <MDBCol lg="2">
          <MDBCard ClassName="mb-4">
            <MDBCardBody className='center' >
              <h3>Heartbeat</h3>
              <h1 className='average-measurement'>
                73
              </h1>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default BasicExample;