import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardImage,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import dummyUser from '../dummyUser';
import Button from '../Components/Button';
import UserProfileRow from '../Components/UserProfileRow';
import AverageMeasurement from "../Components/AverageMeasurement";

function UserProfile() {

  const list = Object.keys(dummyUser);

  return (
    <div>
    <MDBContainer className="py-5">
      <MDBRow className='g-0'>
        <MDBCardImage
          src={dummyUser.img}
          alt="avatar"
          className="rounded-circle"
          style={{ width: '150px' }}
          fluid />
      </MDBRow>

      <MDBCol lg="6">
        <MDBCard className="mb-4">
          <MDBCardBody>
            {list.filter((item) => item !== "password" && item !== "img").map((item) => {
              return <UserProfileRow
              key = {item}
              label={item}
              value={dummyUser[item]}
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

  <AverageMeasurement className="square bg-primary rounded-circle "/> 



</div>
  );
}

export default UserProfile;

// https://recharts.org/en-US/examples/LegendEffectOpacity