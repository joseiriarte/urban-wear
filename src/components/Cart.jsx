import { CartItem } from './CartItem';
import { CheckoutBtn } from './CheckoutBtn';

export const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <section className='w-4/5 max-w-7xl flex flex-col justify-center items-center my-8'>
      <h2 className='mb-8 text-3xl text-center font-bold'>Carrito</h2>
      <h3 className='mb-8 text-2xl text-center font-semibold'>Tu Pedido:</h3>
      {cart.length !== 0 ? (
        <div className='min-h-[50vh] flex flex-col justify-center items-center'>
          <ul className='flex flex-col gap-4 mb-8'>
            {cart.map((item) => (
              <CartItem
                key={item.itemId}
                itemId={item.itemId}
                name={item.name}
                price={item.price}
                img={item.images[0]}
                size={item.size}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </ul>
          <CheckoutBtn />
        </div>
      ) : (
        <p className='py-64 text-xl'>Tu carrito está vacío.</p>
      )}
    </section>
  );
};
