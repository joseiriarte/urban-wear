import { Link } from 'react-router-dom';

export const ProductsBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to='/productos'
      onClick={scrollToTop}
      className='w-[90%] max-w-72 py-4 px-8 bg-darkBlue text-white font-medium rounded-2xl text-center transition duration-200 hover:bg-darkerBlue'
    >
      Ver todos los productos
    </Link>
  );
};
