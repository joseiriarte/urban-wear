export const CheckoutBtn = () => {
  return (
    <button
      onClick={() => window.alert('Algo salió mal, pero estamos trabajando para solucionarlo!')}
      className='w-[90%] max-w-72 py-4 px-8 bg-darkBlue text-white font-medium rounded-2xl text-center transition duration-200 hover:bg-darkerBlue'
    >
      Finalizar compra
    </button>
  );
};
