import { cardData } from '../../data';
import Card from '../Card/Card';
const Homepage = () => {
  return (
    <div>
      {/* main container */}
      <div>
        <div
          style={{
            background: 'rgb(68, 177, 204)',
            textAlign: 'center',
            margin: '10px 30px 10px 30px',
            borderRadius: '1rem',
            lineHeight: '4rem',
            fontWeight: 'bold',
            fontSize: '2.5rem',
          }}
        >
        Demos! Where You Learn And Play!
          {/* <marquee>Demos! Where You Learn And Play!</marquee> */}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          margin: '20px',
          flexWrap: 'wrap',
        }}
      >
        {cardData.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
