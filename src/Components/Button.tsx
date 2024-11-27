import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

interface ButtonProps {
  className?: string;
  size?: "sm" | "lg";
  text: string;
  type?: "button" | "submit" | "reset";
  datamdbtarget?: string;
  ariacontrols?: string;
  ariaexpanded?: boolean;
  arialabel?: string;
  datamdbcollapseinit?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  text,
  type = "button", // Default value for `type`
  datamdbtarget,
  ariacontrols,
  ariaexpanded,
  arialabel,
  datamdbcollapseinit,
  onClick,
}) => {
  return (
    <MDBBtn
      className={className}
      data-mdb-target={datamdbtarget}
      aria-controls={ariacontrols}
      aria-expanded={ariaexpanded}
      aria-label={arialabel}
      type={type}
      size={size}
      data-mdb-collapse-init={datamdbcollapseinit}
      onClick={onClick}
    >
      {text}
    </MDBBtn>
  );
};

export default Button;
