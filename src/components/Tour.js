import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour" id={`tour-item-${id}`}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "See less" : "Show more"}
          </button>
        </p>
        <button
          id={`delete-btn-${id}`}
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
