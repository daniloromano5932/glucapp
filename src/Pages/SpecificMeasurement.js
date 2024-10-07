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
import { useState } from 'react';

function SpecificMeasurement() {

  const [timePeriod, setTimePeriod] = useState("YEAR");

  const handleClick = (res) => {
    setTimePeriod(res);
  }

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard className="mb-10 me-10">
            <MDBCardBody className='d-flex flex-column' >
              <h1>WEIGHT</h1>
              <ChartsNavbar
                onClick={handleClick}
              />
              <ChartLine
                className="chart"
                timePeriod={timePeriod}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className="mb-10 me-10">
            <MDBCardBody className='d-flex flex-column'>
              <h1>GLYCEMIA</h1>
              <ChartsNavbar
                onClick={handleClick}
              />
              <ChartArea lassName="chart"
                timePeriod={timePeriod}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className="mb-10">
            <MDBCardBody className='d-flex flex-column'>
              <h1>HEART RATE</h1>
              <ChartsNavbar
                onClick={handleClick}
              />
              <ChartBar lassName="chart"
                timePeriod={timePeriod}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className="mb-10">
            <MDBCardBody className='d-flex flex-column'>
              <h1>BLOOD PRESSURE</h1>
              <ChartsNavbar
                onClick={handleClick}
              />
              <ChartMultipleLines
                lassName="chart"
                timePeriod={timePeriod}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SpecificMeasurement;
