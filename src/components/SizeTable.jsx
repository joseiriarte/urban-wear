import { sizes } from '../constants';
import { Size } from './Size';

export const SizeTable = ({ size, setSize }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-lg'>Talle: {size}</p>
      <div className='w-full max-w-80 flex flex-wrap justify-center'>
        {sizes.map((value) => (
          <Size
            value={value}
            key={value}
            setSize={setSize}
          />
        ))}
      </div>
    </div>
  );
};
