import {
  buzoAzul1,
  buzoAzul2,
  buzoNegro1,
  buzoNegro2,
  buzoRojo1,
  buzoRojo2,
  buzoVerde1,
  buzoVerde2,
  extra2,
  extra3,
  extra4,
  remeraNegra1,
  remeraNegra2,
  remeraRosa1,
  remeraRosa2,
  remeraVerde1,
  remeraVerde2,
  remeraVioleta1,
  remeraVioleta2,
} from '../assets';

const products = [
  {
    id: '1',
    name: 'Remera Básica Negra',
    category: 'remeras',
    description:
      'Explora nuestra colección de remeras, diseñadas para ofrecerte un estilo versátil y cómodo. Cada pieza está confeccionada con algodón de alta calidad, garantizando una sensación suave sobre la piel. Disponibles en una variedad de colores únicos, nuestras remeras son perfectas para cualquier ocasión, desde un día casual en casa hasta una salida con amigos. ¡Expresate con cada look!',
    price: '$28.000',
    images: [remeraNegra1, remeraNegra2],
    size: 'XS',
  },
  {
    id: '2',
    name: 'Remera Básica Rosa',
    category: 'remeras',
    description:
      'Explora nuestra colección de remeras, diseñadas para ofrecerte un estilo versátil y cómodo. Cada pieza está confeccionada con algodón de alta calidad, garantizando una sensación suave sobre la piel. Disponibles en una variedad de colores únicos, nuestras remeras son perfectas para cualquier ocasión, desde un día casual en casa hasta una salida con amigos. ¡Expresate con cada look!',
    price: '$25.000',
    images: [remeraRosa1, remeraRosa2],
    size: 'XS',
  },
  {
    id: '3',
    name: 'Remera Básica Verde',
    category: 'remeras',
    description:
      'Explora nuestra colección de remeras, diseñadas para ofrecerte un estilo versátil y cómodo. Cada pieza está confeccionada con algodón de alta calidad, garantizando una sensación suave sobre la piel. Disponibles en una variedad de colores únicos, nuestras remeras son perfectas para cualquier ocasión, desde un día casual en casa hasta una salida con amigos. ¡Expresate con cada look!',
    price: '$26.000',
    images: [remeraVerde1, remeraVerde2],
    size: 'XS',
  },
  {
    id: '4',
    name: 'Remera Básica Violeta',
    category: 'remeras',
    description:
      'Explora nuestra colección de remeras, diseñadas para ofrecerte un estilo versátil y cómodo. Cada pieza está confeccionada con algodón de alta calidad, garantizando una sensación suave sobre la piel. Disponibles en una variedad de colores únicos, nuestras remeras son perfectas para cualquier ocasión, desde un día casual en casa hasta una salida con amigos. ¡Expresate con cada look!',
    price: '$27.000',
    images: [remeraVioleta1, remeraVioleta2],
    size: 'XS',
  },
  {
    id: '5',
    name: 'Buzo Canguro Azul',
    category: 'buzos',
    description:
      'Sumergite en la comodidad con nuestros buzos, el complemento ideal para tus días más relajados. Fabricados con materiales cálidos y suaves, estos buzos no solo te mantienen abrigado, sino que también aportan un toque de estilo urbano a tu guardarropa. Con diseños modernos y prácticos bolsillos, son perfectos para salir o para un día de descanso en casa. ¡No te quedes sin el tuyo!',
    price: '$50.000',
    images: [buzoAzul1, buzoAzul2],
    size: 'XS',
  },
  {
    id: '6',
    name: 'Buzo Canguro Negro',
    category: 'buzos',
    description:
      'Sumergite en la comodidad con nuestros buzos, el complemento ideal para tus días más relajados. Fabricados con materiales cálidos y suaves, estos buzos no solo te mantienen abrigado, sino que también aportan un toque de estilo urbano a tu guardarropa. Con diseños modernos y prácticos bolsillos, son perfectos para salir o para un día de descanso en casa. ¡No te quedes sin el tuyo!',
    price: '$53.000',
    images: [buzoNegro1, buzoNegro2],
    size: 'XS',
  },
  {
    id: '7',
    name: 'Buzo Canguro Rojo',
    category: 'buzos',
    description:
      'Sumergite en la comodidad con nuestros buzos, el complemento ideal para tus días más relajados. Fabricados con materiales cálidos y suaves, estos buzos no solo te mantienen abrigado, sino que también aportan un toque de estilo urbano a tu guardarropa. Con diseños modernos y prácticos bolsillos, son perfectos para salir o para un día de descanso en casa. ¡No te quedes sin el tuyo!',
    price: '$51.000',
    images: [buzoRojo1, buzoRojo2],
    size: 'XS',
  },
  {
    id: '8',
    name: 'Buzo Canguro Verde',
    category: 'buzos',
    description:
      'Sumergite en la comodidad con nuestros buzos, el complemento ideal para tus días más relajados. Fabricados con materiales cálidos y suaves, estos buzos no solo te mantienen abrigado, sino que también aportan un toque de estilo urbano a tu guardarropa. Con diseños modernos y prácticos bolsillos, son perfectos para salir o para un día de descanso en casa. ¡No te quedes sin el tuyo!',
    price: '$52.000',
    images: [buzoVerde1, buzoVerde2],
    size: 'XS',
  },
];

const quality = [
  {
    id: '1',
    title: 'Materiales de Calidad',
    text: 'En Urban Wear nos enorgullecemos de ofrecer prendas confeccionadas con materiales de la más alta calidad. Cada remera y buzo está diseñado para brindarte una experiencia de uso excepcional, con telas suaves y resistentes que garantizan durabilidad. Creemos que la comodidad es esencial, por lo que seleccionamos cuidadosamente cada material para que te sientas bien en cualquier ocasión, sin comprometer el estilo.',
    img: extra2,
  },
  {
    id: '2',
    title: 'Variedad de Productos',
    text: 'Nuestra tienda ofrece una impresionante variedad de remeras y buzos que se adaptan a todos los gustos y estilos. Desde diseños clásicos hasta opciones más modernas y atrevidas, tenemos algo para cada personalidad. Ya sea que busques un look casual para el día a día o una prenda que destaque en una salida especial, encontrarás la opción perfecta en nuestra amplia colección. ¡Expresate como quieras!',
    img: extra3,
  },
  {
    id: '3',
    title: 'Excelente Atención',
    text: 'En Urban Wear valoramos a nuestros clientes y nos esforzamos por brindar una atención excepcional. Nuestro equipo está comprometido a ayudarte en cada etapa de tu experiencia de compra, desde la selección de productos hasta el proceso de envío. Estamos aquí para responder tus preguntas y ofrecerte asesoramiento personalizado, asegurando que encuentres las prendas ideales que se ajusten a tus necesidades y preferencias. ¡Tu satisfacción es nuestra prioridad!',
    img: extra4,
  },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export { products, quality, sizes };
