export const QualityCard = ({ title, text, img }) => {
  return (
    <div className='w-[90%] max-w-96 flex flex-col px-8 border border-lightGrey rounded-2xl'>
      <h3 className='my-8 text-2xl text-center font-medium'>{title}</h3>
      <div className='w-full flex flex-col justify-between items-center gap-8'>
        <img
          src={img}
          alt={title}
          className='w-[95%] max-w-80 rounded-2xl'
        />
        <p className='w-[95%] max-w-80 pb-2 text-center text-balance font-Montserrat'>{text}</p>
      </div>
    </div>
  );
};
