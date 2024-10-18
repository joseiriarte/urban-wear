import { Link } from 'react-router-dom';
import { github, instagram, whatsapp } from '../assets';

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col justify-center items-center mt-16 py-8 gap-4 bg-darkGrey text-zinc-50'>
      <p>Contacto</p>
      <div className='flex justify-center items-center gap-4 mb-4'>
        <Link to='/'>
          <img
            src={whatsapp}
            alt='Whatsapp'
            width={35}
          />
        </Link>
        <Link to='/'>
          <img
            src={instagram}
            alt='Instagram'
            width={35}
          />
        </Link>
      </div>
      <p>Made with &#60;3 by Jose Iriarte.</p>
      <div>
        <a href='https://github.com/joseiriarte'>
          <img
            src={github}
            alt='GitHub logo'
            width={35}
          />
        </a>
      </div>
    </footer>
  );
};
