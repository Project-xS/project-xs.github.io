const Home = () => {
    const userScreenshots = [
      'user1.png', 'user2.png', 'user3.png',
      'user4.png', 'user5.png', 'user6.png',
      'user7.png', 'user8.png', 'user9.png'
    ];

    const merchantScreenshots = [
      'admin1.png', 'admin2.png', 'admin3.png', 'admin4.png'
    ];
  return (
    <div className="home">
      <section className="hero">
        <h1>Skip the Queue, Pre-order with XS</h1>
        <p>The canteen ordering solution built for Chennai Institute of Technology. Order your lunch ahead of time and pick it up without the wait.</p>
        <div className="hero-links">
          <a href="https://github.com/Project-xS/xs-user" target="_blank" rel="noopener noreferrer" className="btn btn-primary">User App (GitHub)</a>
          <a href="https://github.com/Project-xS/xs-merchant" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Merchant App (GitHub)</a>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Pre-order Lunch</h3>
            <p>Select your favorite meals before the lunch rush starts.</p>
          </div>
          <div className="feature-card">
            <h3>Quick Payments</h3>
            <p>Secure and fast checkout via PhonePe and other gateways.</p>
          </div>
          <div className="feature-card">
            <h3>Real-time Updates</h3>
            <p>Track your order status from preparation to pickup.</p>
          </div>
          <div className="feature-card">
            <h3>Merchant Dashboard</h3>
            <p>Streamlined order management for canteen staff.</p>
          </div>
        </div>
      </section>

      <section className="screenshots">
        <h2>App Screenshots</h2>

        <h3>User App</h3>
        <div className="screenshot-gallery">
          {userScreenshots.map((img, index) => (
            <div key={`user-${index}`} className="screenshot-item">
              <img src={`/screenshots/${img}`} alt={`User App Screenshot ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <h3>Merchant App</h3>
        <div className="screenshot-gallery">
          {merchantScreenshots.map((img, index) => (
            <div key={`merchant-${index}`} className="screenshot-item">
              <img src={`/screenshots/${img}`} alt={`Merchant App Screenshot ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
