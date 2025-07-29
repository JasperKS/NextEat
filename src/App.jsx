import restaurants from "./data";
import { useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const restaurant = restaurants[currentIndex] || null;

  function handleSwipeLeft() {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>NextEat</h1>
      { restaurant ? (
        <div style={{ 
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          maxWidth: "400px", 
          margin: "2rem auto", 
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h2>{restaurant.name}</h2>
          <p><strong>{restaurant.cuisine}</strong></p>
          <p>{restaurant.description}</p>
        </div>
      ) : <p>No more restaurants to show</p>
      }
      <div style={{ marginTop: "1rem"}}>
        <button onClick={handleSwipeLeft}>👎 Swipe Left</button>
      </div>
    </div>
  )
}


export default App;