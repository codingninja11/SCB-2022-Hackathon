import { useParams } from "react-router-dom";
import { cardData } from "../../data";
import ReactPlayer from "react-player";
import { useState } from "react";
import "./Course.css";
const Course = () => {
  const { id } = useParams();
  const filterdData = cardData.filter((data) => data.title === id);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    console.log(option);
    if (option.correct) {
      setScore(score + 1);
    }
  };
  return (
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "2rem 1rem 2rem 1rem",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <ReactPlayer url={filterdData[0].video} />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <a href={filterdData[0].link}>
          <button
            style={{
              height: "30px",
              width: "10rem",
              border: "none",
              borderRadius: "2rem",
              background: "#4CAF50",
            }}
          >
            Explore More !!!
          </button>
          </a>
      </div>
      <div style={{ fontWeight: "600", fontSize: "1.5rem", color: "white" }}>
        About
      </div>
      <div style={{ fontSize: "1rem", color: "white" }}>
        {filterdData[0].description}
      </div>
      <div className="play">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          <div>Play The Quiz Here!</div>
          <div>Score:{score}</div>
        </div>

        <div style={{ marginLeft: "1rem" }}>
          {filterdData[0].questions.map((q, index) => {
            return (
              <div
                style={{
                  margin: "1rem",
                  backgroundColor: "#AA4FBC",
                  padding: "1rem",
                  borderRadius: "2rem",
                }}
              >
                <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {index + 1}. {q.question}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {q.options.map((option) => {
                    return (
                      <div
                        style={{ width: "50%", margin: "1rem 0rem 0rem 0rem" }}
                      >
                        <input
                          type="radio"
                          name={q.question}
                          value={option.ans}
                          onChange={() => handleClick(option)}
                        />
                        <span style={{ marginLeft: "1rem", fontSize: "1rem" }}>
                          {option.ans}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
