import { useState, useEffect } from 'react';
import './bathroomDesigns.css';

const BathroomDesignsPage = () => {
  const [bathroomDesigns, setBathroomDesigns] = useState([]);

  // Use mock data for testing the UI
  useEffect(() => {
    const mockBathroomDesigns = [
      {
        _id: '1',
        title: 'Luxury Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.t2E_LM5K3bQNN8rf34IsFgHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxurious bathroom with marble finishes and premium fixtures.Design no.-21',
      },
      {
        _id: '2',
        title: 'Modern Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.zbXmU6bqRS-zNbgQ6UDBUwHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A sleek and modern bathroom with a minimalist aesthetic.Design no.-22',
      },
      {
        _id: '3',
        title: 'Rustic Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.jMTtbF8WvBHLjyCZir3T9gHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy rustic bathroom with wooden accents and earthy tones.Design no.-23',
      },
      {
        _id: '4',
        title: 'Scandinavian Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.oKQv9fXcJnSvhPjlbiPSPAHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A clean Scandinavian-style bathroom with bright and airy decor.Design no.-24',
      },
      {
        _id: '5',
        title: 'Small Space Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.Sa3m8RTZQFcZTks7fRFShAHaE7?w=280&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A compact bathroom optimized for small spaces.Design no.-25',
      },
      {
        _id: '6',
        title: 'Vintage Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.N-jOH_zqNv1EDsyiAO9WJQHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A classic vintage bathroom with elegant fixtures and decor.Design no.-26',
      },
      {
        _id: '7',
        title: 'Spa-Inspired Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.GhaPlw2nGAXYOQUdVWZzMAHaFj?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A spa-like bathroom with calming tones and luxury features.Design no.-27',
      },
      {
        _id: '8',
        title: 'Industrial Bathroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.DLHaReySaE6H29qsMBGTjAHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial-style bathroom with metal and exposed pipes.Design no.-28',
      },
    ];
    setBathroomDesigns(mockBathroomDesigns);
  }, []);

  return (
    <div className="bathroom-page">
      <header className="navbar">
        <h1>Bathroom Designs</h1>
        <input type="text" placeholder="Search bathrooms..." className="search-bar" />
      </header>
      <div className="design-grid">
        {bathroomDesigns.map((design) => (
          <div key={design._id} className="design-card">
            <img src={design.imageUrl} alt={design.title} className="design-image" />
            <div className="design-content">
              <h2>{design.title}</h2>
              <p>{design.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BathroomDesignsPage;
