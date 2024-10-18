import { Link } from 'react-router-dom';
import { products } from '../constants';
import { ProductCard } from './ProductCard';
import { ProductsBtn } from './ProductsBtn';

export const HighlightedProducts = () => {
  const highlighted = products.slice(0, 2);

  return (
    <section className='w-4/5 max-w-7xl flex flex-col justify-center items-center my-8'>
      <h2 className='mb-8 text-3xl text-center font-bold'>Productos destacados</h2>

      <div className='w-full flex flex-wrap justify-center mb-8 gap-8'>
        {highlighted.map((product) => (
          <Link
            to={`/productos/${product.id}`}
            key={product.id}
          >
            <ProductCard
              name={product.name}
              price={product.price}
              img={product.images[0]}
            />
          </Link>
        ))}
      </div>

      <ProductsBtn />
    </section>
  );
};
