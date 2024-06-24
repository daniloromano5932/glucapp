import {
  MDBCol,
  MDBRow,
  MDBCardText
} from 'mdb-react-ui-kit';

function UserProfileRow({ label, value }) {
  return (
    <MDBRow>
      <MDBCol sm="3">
        <MDBCardText>{label}</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">{value}</MDBCardText>
      <hr/>
      </MDBCol>
    </MDBRow>
  );
}

export default UserProfileRow;