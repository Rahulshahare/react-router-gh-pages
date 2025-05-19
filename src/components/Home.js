import SearchBar from './SearchBar';
import ServiceCard from './ServiceCard';

// Sample data (can be replaced with your API or Pullstate store)
const services = [
  { id: 1, name: 'Plumbing', price: '$50/hr' },
  { id: 2, name: 'Cleaning', price: '$40/hr' },
  { id: 3, name: 'Electrician', price: '$60/hr' },
];

function Home() {
  return (
    <div className="home">
        <SearchBar/>
      <div className="service-list">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Home;