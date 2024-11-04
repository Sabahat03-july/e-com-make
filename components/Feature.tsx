import React from 'react';
import FeatureCard from './FeatureCard';

const data = [
  {
    img: "/nature1.png",
    title: "Naturally Derived",
    desc: "Natural And Organic Beauty Product",
  },
  {
    img: "/free.png",
    title: "Free Shipping",
    desc: "Free Shipping on all orders over $99",
  },
  {
    img: "/payment.png",
    title: "Secure Payment",
    desc: "Fully protected when paying online",
  }
];

const Feature = () => {
  return (
    <div className='container pt-16'>
      <h2 className='text-2xl font-bold text-center mb-8'>Our Features</h2>
      <div className='flex overflow-x-auto space-x-4'>
        {data.map((item) => (
          <FeatureCard
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;
