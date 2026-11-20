
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');

  return (
    <div className="app">
      <h1>Weather Now</h1>
      <p>Check the current weather in your city.</p>

      <form>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
