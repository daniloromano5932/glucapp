import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol
}
  from 'mdb-react-ui-kit';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Logo from '../Components/Logo';
import Image from '../Components/Image';
import LegalFooter from '../Components/LegalFooter';

function Signup() {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
          <Image
          src='./images/1692875112654.png' 
          alt="signup form" 
          className='rounded-start w-100'
          />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <Logo />
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create your new account</h5>
              <Input
                label='Email addres'
                id='formControlLg'
                type='email'
                size="lg"
                wrapperClass='mb-4'
              />
              <Input
                wrapperClass='mb-4'
                label='Password'
                id='formControlLg'
                type='password'
                size="lg" />
                  <Input
                wrapperClass='mb-4'
                label='Confirm Password'
                id='formControlLg'
                type='password'
                size="lg" />
              <Button
                text="SIGNUP"
                className="mb-4 px-5 button"
                size='lg'
              />
              <LegalFooter />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;