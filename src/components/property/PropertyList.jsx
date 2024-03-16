import React, { useState, useEffect } from 'react';
import { PropertyCard } from './PropertyCard';

export const PropertyList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState('All');
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform API call to fetch data
        const response = await fetch('https://auction-center-default-rtdb.firebaseio.com/.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data) {
          setProperties(data);
        } else {
          setProperties([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const cities = ['All', 'Bangalore', 'Pune', 'Delhi', 'Mumbai'];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='w-full mx-auto'>
      <div className='mx-auto w-full border my-12'>
        <div className='flex max-w-4xl mx-auto justify-center'>
          {cities.map((city) => (
            <button
              key={city}
              className={`px-8 font-semibold py-6 flex-1 focus:outline-none ${
                selectedCity === city ? 'bg-rose-600 text-white/90' : 'text-gray-800/70'
              }`}
              onClick={() => handleCityChange(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 w-fit mx-auto gap-12'>
      {properties && properties.length > 0 ? (
        properties
          .filter((property) => selectedCity === 'All' || property.city === selectedCity)
          .map((property) => (
            <PropertyCard key={property.propertyID} property={property} />
          ))
      ) : (
        <div>No properties found.</div>
      )}
    </div>
    </div>
  );
};
