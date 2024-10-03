import {MDBCardImage} from 'mdb-react-ui-kit';

function Image({src, alt, className, style, fluid}) {
  return (
      <MDBCardImage
      src={src}
      alt={alt}
      className={className}
      style={style}
      fluid={fluid}
      />
  );
}

export default Image;