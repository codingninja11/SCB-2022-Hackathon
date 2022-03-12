import { useParams } from 'react-router-dom';
import { cardData } from '../../data';
import ReactPlayer from 'react-player';
const Course = () => {
  const { id } = useParams();
  const filterdData = cardData.filter((data) => data.title === id);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '2rem 1rem 2rem 1rem',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}
        >
          <h1>{id}</h1>
        </div>
        <div
          style={{
            width: '50%',
          }}
        >
          <ReactPlayer url={filterdData[0].video} />
        </div>
      </div>
      <div>Play</div>
      <h4>{filterdData[0].description}</h4>
    </div>
  );
};

export default Course;
