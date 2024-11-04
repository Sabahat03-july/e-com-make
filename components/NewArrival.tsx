import React from 'react';
import { Whisper } from "next/font/google"; 
import Data from "@/utils/productData"; // Ensure the path is correct
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const NewArrival = () => {
  return (
    <div className={`container pt-16 ${whisper.className}`}>
      <h2 className='text-3xl font-bold text-center mb-8'>New Arrivals</h2>
      <p className='text-center text-gray-600 mb-12'>Check out the latest additions to our collection!</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Data.map((product) => (
          <div key={product.id} className='border rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105'>
            <img src={product.img} alt={product.category[0]} className='w-full h-auto mb-4 rounded-md shadow-lg' />
            <h3 className='text-lg font-semibold'>{product.category[0]}</h3>
            <p className='text-xl font-bold mt-2'>${product.price}</p>
            {product.sale && <span className='text-red-500 mt-1'>On Sale!</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrival;
