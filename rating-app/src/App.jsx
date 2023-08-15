import { useState } from "react";
import star from "./images/icon-star.svg";
import thanks from './images/illustration-thank-you.svg';
import { FaArrowCircleLeft } from "react-icons/fa";
import "./App.css";

function App() {
  const [rating, setRating] = useState(undefined);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
 }
  return (
    <>
      {isSubmitted ? (
        <>
          <div className="thanks-section">
            <div className="icon">
              <FaArrowCircleLeft className="back-icon" onClick={()=>setSubmitted(false)} />
              <span>Back</span>
            </div>

            <img src={thanks} alt="thank you" className="img" />
            <br />
            <span className="thank-para">you selected {rating} out of 5</span>
            <h2>Thank you!</h2>
            <p>
              We appreciate you taking a time to give a rating,if you ever need
              more support,don't hesitate to get in touch!
            </p>
          </div>
        </>
      ) : (
        <form className="rating-section" onSubmit={handleSubmit}>
          <img className="star-img" src={star} alt="star" />

          <h2>How did we do ?</h2>
          <p>
            Please let us know how we did with your support request.All feedback
            is appreciated to help us improve our offering!
          </p>
          <div className="rate-btn">
            {[1, 2, 3, 4, 5].map((n, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className="btn"
                  onClick={() => setRating(n)}
                >
                  {n}
                </button>
              );
            })}
          </div>

          <button
            disabled={rating === undefined}
            className="submit-btn"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      )}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <span>Asif Saba</span>
      </div>
    </>
  );
}

export default App;
