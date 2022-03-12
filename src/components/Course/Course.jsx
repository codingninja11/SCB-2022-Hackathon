import { useParams } from 'react-router-dom';
import { cardData, questions } from '../../data';
import ReactPlayer from 'react-player';
import { useState } from 'react';
const Course = () => {
  const { id } = useParams();
  const filterdData = cardData.filter((data) => data.title === id);
  console.log(questions);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    console.log(option);
    if (option.correct) {
      setScore(score + 1);
    }
  };
  return (
    <div style={{ padding: '1rem' }}>
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
          <span style={{ fontSize: '10rem', fontWeight: '900' }}>{id}</span>
        </div>
        <div
          style={{
            width: '50%',
          }}
        >
          <ReactPlayer url={filterdData[0].video} />
        </div>
      </div>
      <div style={{ fontWeight: '600', fontSize: '1.5rem' }}>About</div>
      <div style={{ fontSize: '1rem' }}>{filterdData[0].description}</div>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '2rem',
            fontWeight: '500',
          }}
        >
          <div>Play The Quiz Here!</div>
          <div>Score:{score}</div>
        </div>

        <div>
          {questions.map((q) => {
            return (
              <>
                <div>{q.question}</div>
                {q.options.map((option) => {
                  return (
                    <div>
                      <input
                        type="radio"
                        name="option"
                        value={option.ans}
                        onChange={() => handleClick(option)}
                      />
                      <span>{option.ans}</span>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
