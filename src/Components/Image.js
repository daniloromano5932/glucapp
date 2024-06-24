import {MDBCardImage} from 'mdb-react-ui-kit';

function Image({src, alt, className}) {
  return (
      <MDBCardImage
      src={src}
      alt={alt}
      className={className}
      />
  );
}

export default Image;