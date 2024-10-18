import { remove } from '../assets';

export const CartItem = ({ itemId, name, price, img, size, handleRemoveFromCart }) => {
  return (
    <div className='w-full max-w-3xl flex justify-between items-center gap-8 py-4 px-4 text-center border border-lightGrey rounded-2xl transition duration-200 hover:ring-2 ring-darkBlue cursor-pointer max-md:flex-col'>
      <img
        src={img}
        alt={name}
        className='w-[100%] max-w-32 rounded-2xl'
      />
      <p className='text-lg font-medium opacity-90'>
        {name} - {size}
      </p>
      <p className='text-lg font-medium opacity-90'>{price}</p>
      <button onClick={() => handleRemoveFromCart(itemId)}>
        <img
          src={remove}
          alt='Atrás'
          className='w-8'
        />
      </button>
    </div>
  );
};
