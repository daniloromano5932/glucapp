import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import ChartLine from '../Components/ChartLine';
import ChartArea from '../Components/ChartArea';
import ChartBar from '../Components/ChartBar';
import ChartMultipleLines from '../Components/ChartMultipleLines';
import ChartsNavbar from '../Components/ChartsNavbar';

function SpecificMEasurement() {

  return (
    <MDBContainer className="py-5">
      <MDBRow className='g-0'>
        <MDBCol md='6' className='me-10' >
          <MDBCard className="mb-10 me-10">
            <MDBCardBody className='d-flex flex-column' >
              <h1>WEIGHT</h1>
              <ChartsNavbar />
              <ChartLine
                lassName="chart" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className="mb-10 me-10">
            <MDBCardBody className='d-flex flex-column'>
              <h1>GLYCEMIA</h1>
              <ChartsNavbar />
              <ChartArea lassName="chart" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className="mb-10">
            <MDBCardBody className='d-flex flex-column'>
              <h1>HEART RATE</h1>
              <ChartsNavbar />
              <ChartBar lassName="chart" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className="mb-10">
            <MDBCardBody className='d-flex flex-column'>
              <h1>BLOOD PRESSURE</h1>
              <ChartsNavbar />
              <ChartMultipleLines lassName="chart" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SpecificMEasurement;
