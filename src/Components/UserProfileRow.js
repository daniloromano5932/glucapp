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
        {/* <MDBCardText className="text-muted">{value}</MDBCardText> */}
        <MDBCardText className="text-muted"><input placeholder={value} size={30}></input></MDBCardText>

      <hr/>
      </MDBCol>
    </MDBRow>
  );
}

export default UserProfileRow;