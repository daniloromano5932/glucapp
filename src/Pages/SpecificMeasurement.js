import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardImage,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import ChartLine from '../Components/ChartLine';
import ChartArea from '../Components/ChartArea';


function SpecificMEasurement() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className='g-0'>
        <MDBCol md='6' >
          <MDBCard className="mb-4">
            <MDBCardBody className='d-flex flex-column' >
              <ChartLine lassName="chart" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className="mb-4">
            <MDBCardBody className='d-flex flex-column'>
              <ChartArea lassName="chart" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SpecificMEasurement;