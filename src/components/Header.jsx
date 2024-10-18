import { Link } from 'react-router-dom';
import { cart } from '../assets';

export const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo(0, 10000);
  };

  return (
    <header className='w-full flex justify-center items-center py-8 bg-darkGrey text-zinc-50'>
      <div className='w-4/5 max-w-7xl flex justify-between items-center max-md:flex-col max-md:gap-8'>
        <Link
          to='/'
          className='text-5xl font-bold text-balance text-center leading-normal'
        >
          Urban Wear
        </Link>
        <nav className='flex justify-between items-center ml-8 gap-4 max-md:flex-col max-md:ml-0'>
          <Link to='/productos'>Productos</Link>
          <button onClick={scrollToBottom}>Contacto</button>
          <Link
            to='/carrito'
            className='ml-2 max-md:ml-0'
          >
            <img
              src={cart}
              alt='cart'
              width={30}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
