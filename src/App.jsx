import restaurants from "./data";
import { useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const restaurant = restaurants[currentIndex];
  const [isChosen, setIsChosen] = useState(false);
  const [likedRestaurants, setLikedRestaurants] = useState([]);
  const [isViewingLikes, setIsViewingLikes] = useState(false);

  function handleSwipeLeft() {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= restaurants.length ? 0 : nextIndex;
    })
  }

  function handleSwipeRight() {
    if (restaurant) {
      setLikedRestaurants((prevLike) => [...prevLiked, restaurant]);
      setIsChosen(true);
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>NextEat</h1>
      {isViewingLikes && (
        <div style={{ maxWidth: "500px", margin: "2rem auto", textAlign: "left"}}>
          <h2>❤️ Your Liked Restaurants</h2>
          <p>Coming soon: a list of restaurants you swiped right on. </p>
          <button onClick={() => setIsViewingLikes(false)} style={{ marginTop: "1rem"}}>
            🔙 Back to Browsing
          </button>
        </div>
        
      )}

      {!isChosen && !isViewingLikes && (
        <button
          onClick={() => setIsViewingLikes(true)}
          style={{ marginBottom: "1rem" }}
          >
          ❤️ View Likes
        </button>
      )}

      {isChosen ? (
        <div style={{
          border: "2px solid #0070f3",
          padding: "1.5rem",
          borderRadius: "8px",
          maxWidth: "500px",
          backgroundColor: "#f0f8ff",
          margin: "2rem auto"
        }}>
          <h2>🍽️ Your Pick: {restaurant.name}</h2>
          <p><strong>Phone:</strong> {restaurant.phone}</p>
          <p><strong>Website:</strong> <a href={restaurant.website} target="_blank" rel="noreferrer">{restaurant.website}</a></p> 
          <p><strong>Direction:</strong> <a href={restaurant.directions} target="_blank" rel="noreferrer">View on Maps</a></p>

          <button onClick={() => setIsChosen(false)} style={{ marginTop: "1rem"}}>
            🔙 Back to Browsing
          </button>
        </div>
      ) : (
          <>
            <div className="restaurant-card"
              style={{ 
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
            <div className="button-container" 
              style={{ display: "flex", justifyContent: "center", gap: "1rem",
                marginTop: "1rem"
              }}>
              <button onClick={handleSwipeLeft}>👎 Swipe Left</button>
              <button onClick={handleSwipeRight}>👍 Swipe Right</button>
            </div>
          </>
      )}
    </div>
  )
}


export default App;