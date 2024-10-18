import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../constants';
import { AddToCartBtn } from './AddToCartBtn';
import { leftArrow } from '../assets';
import { SizeTable } from './SizeTable';
import { useState } from 'react';

export const ProductDetails = ({ handleAddToCart }) => {
  const { id } = useParams();
  const [img, setImg] = useState(null);
  const [size, setSize] = useState('XS');
  const navigate = useNavigate();

  const product = products.find((product) => product.id.toString() === id);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className='w-4/5 max-w-7xl flex flex-col justify-center items-start my-8 max-lg:items-center'>
      <div>
        <button
          onClick={handleGoBack}
          className='flex justify-center items-center mb-8 gap-2 font-medium'
        >
          <img
            src={leftArrow}
            alt='Atrás'
            className='w-8'
          />
          <p>Ir atrás</p>
        </button>
      </div>
      <div className='flex max-lg:flex-col max-lg:gap-8 justify-center items-center gap-[20%]'>
        <div className='w-[40%] max-lg:w-4/5 flex flex-col items-center gap-4'>
          <img
            src={img || product.images[0]}
            alt='Imagen del producto'
            className='rounded-2xl w-full max-w-[512px]'
          />
          <div className='flex gap-2'>
            <img
              src={product.images[0]}
              alt='Imagen del producto'
              width={50}
              className='rounded-sm cursor-pointer transition duration-200 hover:ring-2 ring-darkBlue'
              onClick={() => setImg(product.images[0])}
            />
            <img
              src={product.images[1]}
              alt='Imagen del producto'
              width={50}
              className='rounded-sm cursor-pointer transition duration-200 hover:ring-2 ring-darkBlue'
              onClick={() => setImg(product.images[1])}
            />
          </div>
        </div>
        <div className='w-[40%] max-lg:w-4/5 flex flex-col justify-center items-center gap-8'>
          <h2 className='text-3xl text-center font-bold'>{product.name}</h2>
          <p className='text-2xl font-medium'>{product.price}</p>
          <SizeTable
            size={size}
            setSize={setSize}
          />
          <AddToCartBtn
            handleAddToCart={handleAddToCart}
            size={size}
          />
          <p className='text-center text-pretty'>{product.description}</p>
        </div>
      </div>
    </section>
  );
};
