import React from 'react';

interface FeatureCardProps {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ img, title, desc }) => {
  return (
    <div className='border rounded-lg shadow-lg p-4 flex flex-col items-center w-48'> {/* Set a width for cards */}
      <img src={img} alt={title} className='w-full h-auto mb-4 rounded-md' />
      <h3 className='text-xl font-semibold text-center'>{title}</h3>
      <p className='text-gray-600 text-center'>{desc}</p>
    </div>
  );
}

export default FeatureCard;
