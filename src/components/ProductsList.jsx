import { useState } from 'react';
import { products } from '../constants';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';

export const ProductsList = () => {
  const [list, setList] = useState(products);
  const [title, setTitle] = useState('Todos los Productos');

  const handleCategory = (category) => {
    if (category === 'todos') {
      setList(products);
      setTitle('Todos los Productos');
    } else if (category === 'remeras') {
      setList(products.filter((product) => product.category === 'remeras'));
      setTitle('Remeras');
    } else if (category === 'buzos') {
      setList(products.filter((product) => product.category === 'buzos'));
      setTitle('Buzos');
    }
  };

  return (
    <section className='w-4/5 max-w-7xl flex flex-col justify-center items-center my-8'>
      <div className='flex max-md:flex-col'>
        <button
          onClick={() => handleCategory('todos')}
          className='py-4 px-8 text-center text-xl hover:underline underline-offset-4 decoration-2 decoration-darkBlue'
        >
          Ver Todos
        </button>
        <button
          onClick={() => handleCategory('remeras')}
          className='py-4 px-8 text-center text-xl hover:underline underline-offset-4 decoration-2 decoration-darkBlue'
        >
          Remeras
        </button>
        <button
          onClick={() => handleCategory('buzos')}
          className='py-4 px-8 text-center text-xl hover:underline underline-offset-4 decoration-2 decoration-darkBlue'
        >
          Buzos
        </button>
      </div>
      <h2 className='my-8 text-3xl text-center font-bold'>{title}</h2>

      <div className='w-full flex flex-wrap items-center justify-center gap-8'>
        {list.map((product) => (
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
    </section>
  );
};
