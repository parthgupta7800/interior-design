import { useState, useEffect } from 'react';
import './bedroomDesigns.css';

const BedroomDesignsPage = () => {
  const [bedroomDesigns, setBedroomDesigns] = useState([]);

  // Use mock data for testing the UI
  useEffect(() => {
    const mockBedroomDesigns = [
      {
        _id: '1',
        title: 'Modern Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.W8zAvEtm1w28Ez7HUK7bfQHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A sleek and modern bedroom with clean lines and neutral tones.Design no.-29',
      },
      {
        _id: '2',
        title: 'Rustic Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.6GuYMKLdU1nh9yzXKyG2ZwHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy rustic bedroom featuring wooden accents and warm lighting.Design no.-30',
      },
      {
        _id: '3',
        title: 'Luxury Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.HucAKmVvlHAJuvQeopUHZwHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxurious bedroom with plush decor and premium finishes.Design no.-31',
      },
      {
        _id: '4',
        title: 'Scandinavian Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.FUzwhShnlkLk7VNHF0EC7QHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A minimalist Scandinavian-style bedroom with soft colors.Design no.-32',
      },
      {
        _id: '5',
        title: 'Small Space Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.HQfiX9W5cbXYKuU13y7sIQHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A compact bedroom design perfect for small spaces.Design no.-33',
      },
      {
        _id: '6',
        title: 'Vintage Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.o3nlLp8gPqPAz_5j36oCPgHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A classic vintage bedroom with ornate details and elegant decor.Design no.-34',
      },
      {
        _id: '7',
        title: 'Boho Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.8SEViOIHkF4Ll0WaTw_bQQHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A bohemian bedroom with eclectic decor and vibrant colors.Design no.-35',
      },
      {
        _id: '8',
        title: 'Industrial Bedroom',
        imageUrl:
          'https://th.bing.com/th/id/OIP.qHyOvJrMrzZ6D-XyKyg97AHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial-style bedroom with exposed brick and metal finishes.Design no.-36',
      },
    ];
    setBedroomDesigns(mockBedroomDesigns);
  }, []);

  return (
    <div className="bedroom-page">
      <header className="navbar">
        <h1>Bedroom Designs</h1>
        <input type="text" placeholder="Search bedrooms..." className="search-bar" />
      </header>
      <div className="design-grid">
        {bedroomDesigns.map((design) => (
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

export default BedroomDesignsPage;
