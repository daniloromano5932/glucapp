import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import Button from '../Components/Button';
import Image from '../Components/Image';
import UserBio from '../Components/UserBio';
import UserProfileRow from '../Components/UserProfileRow';
import AverageMeasurement from "../Components/AverageMeasurement";
import axios from 'axios';
import { useEffect, useState } from 'react';

function UserProfileV2() {
  const [averageMeasurements, setAverageMeasurements] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const data = async () => {
      await axios
        .get(`${baseURL}measurements/average_measurements?time_period=200`, {
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
        })
        .catch((err) => {
          setAverageMeasurements(err);
          console.log(err)
        })
    }
    data();
  }, [baseURL])

  useEffect(() => {
    const userInfo = async () => {
      await axios
        .get(`${baseURL}user/user_info`, {
          headers: {
            user_id: 1
          }
        })
        .then((res) => {
          setUserDetails({
            first_name: res.data[0].first_name,
            surname: res.data[0].surname,
            email: res.data[0].email,
            date_of_birth: new Date(res.data[0].date_of_birth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            phone_number: res.data[0].phone_number,
            address: res.data[0].address,
            codice_fiscale: res.data[0].codice_fiscale,
            sex: res.data[0].sex
          })
        })
        .catch((err => console.log(err)))
    }
    userInfo();
  }, [baseURL])

  return (
    <div className='body'>
      <div className='user-info'>
        <Image
          src={"./images/avatar.jpg"}
          className="user-profile-pic"
          />
        <UserBio
          {...userDetails}
        />
      </div>
      <div className='user-average-measurements'>
        <div className='left'>
        <AverageMeasurement
          name="Heartbeat"
          value={averageMeasurements.averageHeartRate}
        />
         <AverageMeasurement
            name="Blood Pressure"
            value={averageMeasurements.averageMaxBloodPressure === undefined ? '' : `${averageMeasurements.averageMaxBloodPressure}/${averageMeasurements.averageMinBloodPressure}`}
          />
        </div>
        <div className='right'>
        <AverageMeasurement
            name="Glycemia"
            value={averageMeasurements.glycemia}
          />
          <AverageMeasurement
            name="Weight"
            value={averageMeasurements.averageWeight}
          />
        </div>
         
      </div>

    </div>




    // <div>
    //   <div>
    //     <img
    //       src="./images/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
    //       alt="avatar"
    //     />
    //     <h2>{`${userDetails.first_name} ${userDetails.surname} `}</h2>
    //     <h3>{userDetails.sex}</h3>
    //     <h3>{`Date of birth: ${userDetails.date_of_birth}`}</h3>
    //     <h3>{`Phone number: ${userDetails.phone_number}`}</h3>
    //     <h3>{`Address: ${userDetails.address}`}</h3>
    //     <h3>{`Codice Fiscale: ${userDetails.codice_fiscale}`}</h3>
    //   </div>
    //   <div>
    //     <div>
    //       <AverageMeasurement
    //         name="Heartbeat"
    //         value={averageMeasurements.averageHeartRate}
    //       />
    //       <AverageMeasurement
    //         name="Blood Pressure"
    //         value={averageMeasurements.averageMaxBloodPressure === undefined ? '' : `${averageMeasurements.averageMaxBloodPressure}/${averageMeasurements.averageMinBloodPressure}`}
    //       />
    //     </div>
    //     <div>
    //       <AverageMeasurement
    //         name="Glycemia"
    //         value={averageMeasurements.glycemia}
    //       />
    //       <AverageMeasurement
    //         name="Weight"
    //         value={averageMeasurements.averageWeight}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default UserProfileV2;

