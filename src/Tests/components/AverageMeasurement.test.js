import { render, screen } from '@testing-library/react';
import AverageMeasurement from '../../Components/AverageMeasurement';
import '@testing-library/jest-dom/extend-expect'

describe('AverageMeasurement component', () => {
  it('Should render the component with the right name and value', () => {
    render(<AverageMeasurement name='Weight' value='98' />);
    const nameElement = screen.getByText('Weight');
    const valueElement = screen.getByText(98);
    expect(nameElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
  it('Should render the component, even if name is not present', () => {
    render(<AverageMeasurement value='98' />);
    const valueElement = screen.getByText(98);
    expect(valueElement).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3 })).toHaveTextContent('');
  });
  it('Should render the component, even if value is not present', () => {
    render(<AverageMeasurement name='Weight' />);
    const nameElement = screen.getByText('Weight');
    expect(nameElement).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent('');
  });
  it('Should render the component, even if name and value are not present', () => {
    render(<AverageMeasurement/>);
    expect(screen.queryByRole('heading', {level : 3})).toHaveTextContent('');
    expect(screen.queryByRole('heading', {level : 1})).toHaveTextContent('');
  });
  it('Should have the correct class name', () => {
    render(<AverageMeasurement/>);
    const MDBContainer = screen.getByTestId('MDBContainer');
    const MDBRow = screen.getByTestId('MDBRow');
    const MDBCard = screen.getByTestId('MDBCard');
    const MDBCardBody = screen.getByTestId('MDBCardBody');
    const valueElement = screen.queryByRole('heading', { level: 1 });
    expect(MDBContainer).toHaveClass('py-5');
    expect(MDBRow).toHaveClass('g-0');
    expect(MDBCard).toHaveClass('mb-4');
    expect(MDBCardBody).toHaveClass('center');
    expect(valueElement).toHaveClass('average-measurement')
  });
});