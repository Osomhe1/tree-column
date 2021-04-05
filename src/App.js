import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <section className='first-section'>
      <h1>Sedans</h1>
      <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip.</p>
      <button className='first-btn'>Learn More</button>
    </section>

    <section class="middle-section">
      <h1>SUVs</h1>
      <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures.</p>
      <button className='second-btn'>Learn More</button>
    </section>

    <section className='last-section'>
      <h1>Luxury</h1>
      <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style.</p>
      <button className='last-btn'>Learn More</button>
    </section>
      </div>
    
    </div>
  );
}

export default App;
