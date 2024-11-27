import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol
}
  from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";
import Button from '../Components/Button';
import Input from '../Components/Input';
import Logo from '../Components/Logo';
import Image from '../Components/Image';
import LegalFooter from '../Components/LegalFooter';

function Login() {


  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <Image
              src='./images/benefits-of-medical-technology (1).jpg'
              alt="login form"
              className='rounded-start w-100'
            />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <Logo />
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <Input
                label='Email addres'
                id='email'
                type='email'
                size="lg"
                wrapperClass='mb-4'
              />
              <Input
                wrapperClass='mb-4'
                label='Password'
                id='password'
                type='password'
                size="lg" />
              <Button
                text="LOGIN"
                className="mb-4 px-5 button"
                size='lg'
                as="button"
              />
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account?<Link to="/signup" style={{ color: '#393f81' }}> Register here</Link></p>
              <LegalFooter />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;