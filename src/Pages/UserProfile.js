import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardImage,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import Button from '../Components/Button';
import UserProfileRow from '../Components/UserProfileRow';
import AverageMeasurement from "../Components/AverageMeasurement";
import axios from 'axios';
import { useEffect, useState } from 'react';




function UserProfile() {
  const [averageMeasurements, setAverageMeasurements] = useState({});
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const data = async () => {
      await axios
        .get('http://localhost:8000/average_measurements?time_period=200', {
          headers: {
            user_id: 1
          }
        })
        .then((res) => {
          setAverageMeasurements({
            "glycemia": res.data.averageGlycemia,
            "averageHeartRate": res.data.averageHeartRate,
            "averageMaxBloodPressure": res.data.averageMaxBloodPressure,
            "averageMinBloodPressure": res.data.averageMinBloodPressure,
            "averageWeight": res.data.averageWeight
          })
          console.log("response: ", res)
        })
        .catch((err => console.log(err)))
    }
    data();
  }, [])

  useEffect(() => {
    const userInfo = async () => {
      await axios
        .get('http://localhost:8000/user_info', {
          headers: {
            user_id: 8
          }
        })
        .then((res) => {

          setUserDetails({
        "first_name": res.data[0].first_name,
        "surname": res.data[0].surname,
        "email": res.data[0].email,
        "date_of_birth": res.data[0].date_of_birth,
        "phone_number": res.data[0].phone_number,
        "address": res.data[0].address,
        "codice_fiscale": res.data[0].codice_fiscale,
        "sex": res.data[0].sex
          })
          console.log("response: ", res.date_of_birth)
        })
        .catch((err => console.log(err)))
    }
    userInfo();
  }, [])



  const data = Object.entries(userDetails);

  return (
    <div>
      <MDBContainer className="py-5">
        <MDBRow className='g-0'>
          <MDBCardImage
            src="./images/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
            alt="avatar"
            className="rounded-circle"
            style={{ width: '150px' }}
            fluid />
        </MDBRow>
        <MDBCol lg="6">
          <MDBCard className="mb-4">
            <MDBCardBody>
              {data.map((item) => {
                return <UserProfileRow
                  key={item.indexOf}
                  label={item[0]}
                  value={item[1]}
                />
              })
              }
            </MDBCardBody>
          </MDBCard>
          <Button
            text="Change"
          />
        </MDBCol>
        <MDBCol lg="6">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <UserProfileRow
                label="Pill"
                value="Name of Pill"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer >
      <MDBContainer className="py-5">
        <MDBCol lg="6">
          <AverageMeasurement
            className="square bg-primary rounded-circle "
            name="Heartbeat"
            value={averageMeasurements.averageHeartRate}
          />
          <AverageMeasurement
            className="square bg-primary rounded-circle "
            name="Blood Pressure"
            value={`${averageMeasurements.averageMaxBloodPressure}/${averageMeasurements.averageMinBloodPressure}`}
          />
        </MDBCol>
        <MDBRow className='g-0'>
          <MDBCol>
            <AverageMeasurement
              className="square bg-primary rounded-circle "
              name="Glycemia"
              value={averageMeasurements.glycemia}
            />
            <AverageMeasurement
              className="square bg-primary rounded-circle "
              name="Weight"
              value={averageMeasurements.averageWeight}
            />
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default UserProfile;

// https://recharts.org/en-US/examples/LegendEffectOpacity