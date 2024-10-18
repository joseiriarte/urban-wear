export const Size = ({ value, setSize }) => {
  return (
    <button
      onClick={() => setSize(value)}
      className='flex justify-center items-center w-20 my-1 mx-1 py-3 px-4 font-Montserrat border border-lightGrey rounded cursor-pointer'
    >
      {value}
    </button>
  );
};
