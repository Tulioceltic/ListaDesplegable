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
      <li>
        {props.name}
      </li>
    </div>
  );
};

export default Product;
