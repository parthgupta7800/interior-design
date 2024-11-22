import { useState, useEffect } from 'react';
import './kitchenDesigns.css';

const KitchenDesignsPage = () => {
  const [kitchenDesigns, setKitchenDesigns] = useState([]);

  // Use mock data for testing the UI
  useEffect(() => {
    const mockKitchenDesigns = [
      {
        _id: '1',
        title: 'Modern Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.S8mF3GZlFM3kOHwEFnVqjQHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A sleek and modern kitchen with state-of-the-art appliances.Design no.-37',
      },
      {
        _id: '2',
        title: 'Farmhouse Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.5INkF3Pequ4AkAqMDlGZWwHaFj?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A cozy farmhouse kitchen with wooden accents and vintage charm.Design no.-38',
      },
      {
        _id: '3',
        title: 'Industrial Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.H1mtXYURPBr9ynSgYCBGEwHaFj?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'An industrial kitchen with exposed pipes and metal finishes.Design no.-39',
      },
      {
        _id: '4',
        title: 'Scandinavian Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.HkA3DUEyT2plYIcr6Wt-bAHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A minimalist Scandinavian kitchen with a focus on functionality.Design no.-40',
      },
      {
        _id: '5',
        title: 'Luxury Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.RLoMZPmcPVO1sbzrtMVtfgHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A luxurious kitchen with premium materials and finishes.Design no.-41',
      },
      {
        _id: '6',
        title: 'Rustic Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.LAw3Q71IKgbJtW8IxRyLjgHaFj?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A rustic kitchen with earthy tones and a cozy atmosphere.Design no.-42',
      },
      {
        _id: '7',
        title: 'Contemporary Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.JwUOE1LuNxDhOb6vTWR_VwHaFj?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A contemporary kitchen with clean lines and innovative design.Design no.-43',
      },
      {
        _id: '8',
        title: 'Coastal Kitchen',
        imageUrl:
          'https://th.bing.com/th/id/OIP.IkNIDiFJbd3hhN3J82KiAgHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'A coastal kitchen with light colors and ocean-inspired decor.Design no.-44',
      },
    ];
    setKitchenDesigns(mockKitchenDesigns);
  }, []);

  return (
    <div className="kitchen-page">
      <header className="navbar">
        <h1>Kitchen Designs</h1>
        <input type="text" placeholder="Search kitchens..." className="search-bar" />
      </header>
      <div className="design-grid">
        {kitchenDesigns.map((design) => (
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

export default KitchenDesignsPage;
