import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className='container relative pt-16'>
<Image  className =" w-full h-auto" src="/hero.webp" alt='hero bg' height={900} width={1500}/>
<div className='hidden sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[250%] h-[200px] space-y-3 lg:w-[300px] lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8' >
    <h2 className='text-[22px] lg:text-[30px] xl:text-[40px] leading-tight '>
        New LipStick For You Girl

    </h2>
    {/* <p className='text-gray-600 text-[14px] xl:text-[16px]'>
    Introducing our latest collection of lipsticks, crafted just for you! Experience vibrant colors and luxurious textures that add the perfect touch to your look. Whether you`re going for a bold statement or a subtle hint of color, our new lipsticks are designed to empower and enhance your beauty. Treat yourself, girl!
    </p>
    <button className='bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded-md hover:bg-accent'>Shop now</button> */}

</div>








    </div>
  )
}

export default Hero;