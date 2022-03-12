import { cardData } from '../../data';
import Card from '../Card/Card';
const Homepage = () => {
  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      {cardData.map((card, index) => {
        return <Card key={index} card={card} />;
      })}
    </div>
  );
};

export default Homepage;
