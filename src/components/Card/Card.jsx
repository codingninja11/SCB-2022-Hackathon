import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  console.log(`Hello ${card.title}`);
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        padding: '10px',
        margin: '1rem',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        background: 'rgb(170, 79, 188)',
        borderRadius: '2rem',
      }}
    >
      <div style={{ padding: '1rem' }}>
        <div style={{ fontSize: '2.5rem', fontWeight: '600' }}>
          {card.title}
        </div>
      </div>
      <div style={{ padding: '1rem 1rem 0.5rem 1rem' }}>
        <img src={card.photo} alt="" width="100" height="100" />
      </div>
      
      <div style={{ padding: '0.5rem 1rem 0rem 1rem' }}>
        <Link to={`/courses/${card.title}`}>
          <button
            style={{
              background: '#4CAF50',
              height: '30px',
              width: '10rem',
              color: 'white',
              border: 'none',
              borderRadius: '2rem',
              fontWeight: '600',
            }}
          >
            View Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
