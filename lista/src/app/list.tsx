'use client'

import { SetStateAction, useEffect, useState } from 'react';
import Product from './product';
import { Anybody } from 'next/font/google';

// Define the type for your information object
type Information = {
  id: number;
  name: string;
  descripcion: string;
  precio: number;
};

const InformationList = () => {
  const [information, setInformation] = useState<Information[]>([]);

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const res = await fetch('/information.json');
        const data = await res.json();
        setInformation(data);
      } catch (error) {
        console.error('Error fetching information:', error);
      }
    };

    fetchInformation();
  }, []);
  
  
  let [pro,setPro] = useState(0);

  return (
    <div className='border-white border-2 p-3 bg-gray-800 h-auto w-1/6'>
      <h2 onClick={()=>setPro(0)} className='cursor-pointer flex'>Information List</h2>
      <ul>
        {information.map((item) => (
            <div className='cursor-pointer' key={item.id} onClick={()=>setPro(item.id)}>
                {item.productName}
                {
                  pro==item.id &&
                  <div>
                    <Product name={item.productName} descripcion={item.description} precio={item.price} ></Product>
                  </div>
                }
            </div>
        ))}
      </ul>
    </div>
  );
};

export default InformationList;
