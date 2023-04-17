import React, { useState } from "react";
import starIcon from "../images/icon-star.svg";
import thankYouImg from "../images/illustration-thank-you.svg";

const Ratings = () => {
  const [selectedRatings, setSeletedRatings] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const selectRatings = (ratings) => {
    setSeletedRatings(ratings);
  };

  const submitHandler = () => {
    setSubmitted(true);
  };

  const ThankYouMessage = () => {
    if (submitted && selectedRatings) {
      return (
        <div className="centerItems">
          <div className="img-container">
            <img src={thankYouImg} alt="thankyou-illustration" />
          </div>
          <small className="selected-ratings">
            You selected <span>{selectedRatings} out of 5 </span>
          </small>
          <h2>Thank you!</h2>
          <small className="appreciation-msg">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </small>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      {!submitted && (
        <>
          <div className="icon-container">
            <img src={starIcon} alt="star-icon" />
          </div>

          <h2>How did we do?</h2>
          <small>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </small>
          <div className="buttons-container">
            <button onClick={() => selectRatings(1)}>1</button>
            <button onClick={() => selectRatings(2)}>2</button>
            <button onClick={() => selectRatings(3)}>3</button>
            <button onClick={() => selectRatings(4)}>4</button>
            <button onClick={() => selectRatings(5)}>5</button>
          </div>
          <button
            className="submit-button"
            type="submit"
            title="submit"
            onClick={submitHandler}
          >
            SUBMIT
          </button>
        </>
      )}
      <ThankYouMessage />
    </div>



  );
};

export default Ratings;
