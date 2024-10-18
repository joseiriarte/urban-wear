import { useParams } from 'react-router-dom';
import { products } from '../constants';

export const AddToCartBtn = ({ handleAddToCart, size }) => {
  const { id } = useParams();

  const product = products.find((product) => product.id.toString() === id);
  const item = { ...product, size: size };

  return (
    <button
      onClick={() => handleAddToCart(item)}
      className='w-[90%] max-w-72 py-4 px-8 bg-darkBlue text-white font-medium rounded-2xl text-center transition duration-200 hover:bg-darkerBlue'
    >
      Agregar al carrito
    </button>
  );
};
