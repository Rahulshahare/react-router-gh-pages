import { useParams, Link } from 'react-router-dom';
import NavBar from './Navbar';

// Mock service data
const services = {
  1: { name: 'Plumbing', price: '$50/hr', description: 'Expert plumbing services.' },
  2: { name: 'Cleaning', price: '$40/hr', description: 'Professional cleaning for your home.' },
  3: { name: 'Electrician', price: '$60/hr', description: 'Certified electrician services.' },
};

function ServiceDetail() {
  const { id } = useParams();
  const service = services[id];

  return (
    <div className="service-detail">
      <div className="content">
        <h2 className="title1">{service.name}</h2>
        <p className="subhead">{service.price}</p>
        <p className="body">{service.description}</p>
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetail;