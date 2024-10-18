export const ProductCard = ({ name, price, img }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={scrollToTop}
      className='w-full max-w-72 flex flex-col justify-center items-center gap-2 py-4 px-4 border border-lightGrey rounded-2xl transition duration-200 hover:ring-2 ring-darkBlue cursor-pointer'
    >
      <img
        src={img}
        alt={name}
        className='w-[95%] max-w-64 rounded-2xl'
      />
      <p className='text-lg font-medium opacity-90'>{name}</p>
      <p className='text-xl font-semibold'>{price}</p>
    </div>
  );
};
