'use client'
import { useEffect, useState } from 'react';

// Define the type for your information object
type Props = {
  name: string;
  descripcion: string;
  precio: number
};

const Product = (props: Props) => {

  return (
    <div>
      <li className='bg-purple-900 border-white border-2 p-2 m-2'>
        <p className='mb-3'>{props.descripcion}</p>
        <p>${props.precio}</p>
      </li>
    </div>
  );
};

export default Product;
