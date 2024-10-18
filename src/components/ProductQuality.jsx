import { quality } from '../constants';
import { QualityCard } from './QualityCard';

export const ProductQuality = () => {
  return (
    <section className='w-4/5 max-w-7xl flex flex-col justify-center items-center my-8'>
      <h2 className='mb-8 text-3xl text-center font-bold'>¿Por qué elegir nuestros productos?</h2>

      <div className='w-full flex flex-wrap justify-center gap-8'>
        {quality.map((qual) => (
          <QualityCard
            key={qual.id}
            title={qual.title}
            text={qual.text}
            img={qual.img}
          />
        ))}
      </div>
    </section>
  );
};
