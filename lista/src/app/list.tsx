// components/InformationList.tsx
'use client'

import { useEffect, useState } from 'react';
import Product from './product';

// Define the type for your information object
type Information = {
  id: number;
  propertyName: string;
  // Add more properties as needed
};

const InformationList = () => {
  const [information, setInformation] = useState<Information[]>([]);

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const res = await fetch('/information.json'); // Assuming information.json is in the public folder
        const data = await res.json();
        setInformation(data);
      } catch (error) {
        console.error('Error fetching information:', error);
      }
    };

    fetchInformation();
  }, []);

  return (
    <div>
      <h2>Information List</h2>
      <ul>
        {information.map((item) => (
          <Product name={item.productName} descripcion={item.description} precio={item.price}></Product>
        ))}
      </ul>
    </div>
  );
};

export default InformationList;
