import { useLocation, Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

// Mock data (replace with API or Pullstate store)
const services = [
  { id: 1, name: 'Plumbing', price: '$50/hr' },
  { id: 2, name: 'Cleaning', price: '$40/hr' },
  { id: 3, name: 'Electrician', price: '$60/hr' },
];

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';
  
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(query)
  );

  return (
    <div className="search-results">
      <div className="content">
        <h2 className="title1">Search Results for "{query}"</h2>
        {filteredServices.length > 0 ? (
          <div className="service-list">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        ) : (
          <p className="body">No services found.</p>
        )}
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default SearchResults;