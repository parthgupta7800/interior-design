import { useState, useEffect } from 'react';
import './livingRoomDesigns.css';

const LivingRoomDesignsPage = () => {
  const [livingRoomDesigns, setLivingRoomDesigns] = useState([]);

  // Use mock data for testing the UI
  useEffect(() => {
    const mockLivingRoomDesigns = [
      {
        _id: '1',
        title: 'Modern Living Room',
        imageUrl:
          'https://th.bing.com/th/id/R.d87ec51b5a59bf9bddf6494a54e2ef79?rik=KL9xfLrH93JJsg&riu=http%3a%2f%2fwww.dwellingdecor.com%2fwp-content%2fuploads%2f2016%2f10%2fUltra-modern-living-room.jpg&ehk=eAqdOqywwsk3yLJQkUTLxWk8BEySHdVSUf%2fKQ4eiDXc%3d&risl=&pid=ImgRaw&r=0',
        description: 'A stylish and modern living room design.Design no.-45',
      },
      {
        _id: '2',
        title: 'Cozy Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.R4w0PSiT12bF2v3eU1p2awHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy and inviting living room space.Design no.-46',
      },
      {
        _id: '3',
        title: 'Bohemian Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.qUekLgHvRaBcs8xPx2Li6gHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A living room filled with vibrant colors and eclectic decor.Design no.-47',
      },
      {
        _id: '4',
        title: 'Industrial Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.VyoRQW5h1jIl_L1NB4n08AHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial-style living room with exposed brick walls.Design no.-48',
      },
      {
        _id: '5',
        title: 'Scandinavian Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.JoOwS8eoTy-3OkeKLO3U_AHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A minimalist Scandinavian-style living room.Design no.-49',
      },
      {
        _id: '6',
        title: 'Vintage Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.r8Ml2jKe4AAMsGHPZ32PKwHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A vintage-inspired living room with classic furniture.Design no.-50',
      },
      {
        _id: '7',
        title: 'Luxury Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP._AmEO29uPBNOzUOnV_nO3wHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxury living room with premium decor elements.Design no.-51',
      },
      {
        _id: '8',
        title: 'Coastal Living Room',
        imageUrl:
          'https://th.bing.com/th/id/OIP.qHnOodIk_jWxW5BifSR6XgHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A coastal-themed living room with oceanic tones.Design no.-52',
      },
    ];
    setLivingRoomDesigns(mockLivingRoomDesigns);
  }, []);

  return (
    <div className="living-room-page">
      <header className="navbar">
        <h1>Living Room Designs</h1>
        <input type="text" placeholder="Search living rooms..." className="search-bar" />
      </header>
      <div className="design-grid">
        {livingRoomDesigns.map((design) => (
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

export default LivingRoomDesignsPage;
