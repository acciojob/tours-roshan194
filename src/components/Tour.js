import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour">
      <img src={image} alt={name} width="300" />
      
      <h4>{name}</h4>
      <h4>₹{price}</h4>

      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "See Less" : "Show More"}
        </button>
      </p>

      <button onClick={() => removeTour(id)}>Remove</button>
    </div>
  );
}

export default Tour;