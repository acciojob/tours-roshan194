import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading />;

  if (tours.length === 0)
    return (
      <main>
        <h2>No tours left</h2>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </main>
    );

  return (
    <main>
      <h2>Our Tours</h2>
      <div className="underline"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
