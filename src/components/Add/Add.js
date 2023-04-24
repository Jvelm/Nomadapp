import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const ButtonGroup = () => {


  const places = [
    {
      id: 1,
      imageSrc: '/images/place1.jpg',
      title: 'Title 1',
      subtitle: 'Subtitle',
      rating: 4,
    },
    {
      id: 2,
      imageSrc: '/images/place2.jpg',
      title: 'Title',
      subtitle: 'Sub',
      rating: 5,
    },
    {
      id: 3,
      imageSrc: '/images/place3.jpg',
      title: 'Title',
      subtitle: 'Sub',
      rating: 3,
    },
    {
      id: 4,
      imageSrc: '/images/place4.jpg',
      title: 'Title',
      subtitle: 'Sub',
      rating: 4.5,
    },
  ];

  return (
    <div className="button-group-container">
      <div className="button-group">
        <Link href='/' >
        <button className='button'>
          Nuevo destino
        </button>
        </Link>
        <Link href='/'>
        <button className='button'>
          Hospedaje
        </button>
        </Link>
        <Link href='/'>
        <button className='button'>
          Buscar actividades
        </button>
        </Link>
        <Link href='/'>
        <button className='button'>
          Mapa
        </button>
        </Link>
      </div>
      <div className="card-carousel-container">
        <div className="card-carousel">
          {places.map((place) => (
            <div key={place.id} className="card">
              <Image src={place.imageSrc} width={300} height={200} alt=''/>
              <div className="card-content">
                <h3>{place.title}</h3>
                <p>{place.subtitle}</p>
                <div className="rating">
                  {Array.from({ length: Math.floor(place.rating) }, (_, i) => (
                    <FaStar key={i} color="#FFD700" />
                  ))}
                  {place.rating % 1 > 0 && (
                    <FaStar half key={place.rating} color="#FFD700" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
      .button-group-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .button-group {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .button {
        background-color: #ffffff;
        border: none;
        color: #000000;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        margin:  10px;
        padding: 10px 20px;
        transition: all 0.3s ease
      `}</style>
    </div>
  );
};

export default ButtonGroup;
