const Card = ({ card }) => {
    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          padding: '10px',
          background: 'red',
          margin: '1rem',
        }}
      >
        <div>
          <span>{card.title}</span>
        </div>
      </div>
    );
  };
  
  export default Card;
  