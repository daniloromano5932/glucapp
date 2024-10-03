import { render, screen } from '@testing-library/react';
import Image from '../../Components/Image';
import '@testing-library/jest-dom/extend-expect'


describe('Image component', () => {
  it('Should render an image with the correct src', () => {
    render(<Image src='https://www.eventbrite.ie/blog/wp-content/uploads/2022/06/Autumn-event-ideas-1-768x511.jpg' alt='Test image' className='test-class' />)
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', 'https://www.eventbrite.ie/blog/wp-content/uploads/2022/06/Autumn-event-ideas-1-768x511.jpg')
  });
  it('Should still be rendered when no src is provided', () => {
    render(<Image alt='Test image' className='test-class' fluid />)
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeVisible();
  });
  it('Should render the image with the correct alt text', () => {
    render(<Image src='https://www.eventbrite.ie/blog/wp-content/uploads/2022/06/Autumn-event-ideas-1-768x511.jpg' alt='Test image' className='test-class' />)
    const imgElement = screen.getByAltText('Test image');
    expect(imgElement).toBeInTheDocument();
  });
  it('Should apply the correct class name', () => {
    render(<Image src='https://www.eventbrite.ie/blog/wp-content/uploads/2022/06/Autumn-event-ideas-1-768x511.jpg' alt='Test image' className='test-class' />)
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('test-class');
  });
  it('Should apply the correct styles from a style group', () => {
    const customStyles = { width: '100px', borderRadius: '50%' };
    render(<Image src='https://www.eventbrite.ie/blog/wp-content/uploads/2022/06/Autumn-event-ideas-1-768x511.jpg' alt='Test image' className='test-class' style={customStyles} />)
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveStyle('width: 100px');
    expect(imgElement).toHaveStyle('borderRadius: 50%');
  });
  it('Should render as a fluid image', () => {
    render(<Image src='https://www.eventbrite.ie/blog/wp-content/uploads/2022/06/Autumn-event-ideas-1-768x511.jpg' alt='Test image' className='test-class' fluid />)
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('img-fluid');
  });
  it('Should still be rendered when no props are provided', () => {
    render(<Image />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeVisible();
  });
});
