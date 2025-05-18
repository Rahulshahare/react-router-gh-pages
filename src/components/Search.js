import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams(); // Access query parameters
  const query = searchParams.get('query') || 'No search term provided';

  return (
    <div>
      <h2>Search Results</h2>
      <p>Search Query: {query}</p>
    </div>
  );
}

export default Search;