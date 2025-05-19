import { Link } from 'react-router-dom';

function ServiceCard({ id, name, price }) {
  return (
    <div className="service-card">
      <h2 className="headline">{name}</h2>
      <p className="subhead">{price}</p>
      <Link to={`/service/${id}`} className="book-button">
        Book Now
      </Link>
    </div>
  );
}

export default ServiceCard;