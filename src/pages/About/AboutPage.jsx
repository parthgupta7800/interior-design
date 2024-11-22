// AboutPage.jsx
// import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import './about.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Parth Gupta',
      role: 'Lead Designer',
      image: 'https://th.bing.com/th/id/OIP.4beP5aBf1hQoLLj_TGKmXAHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'With over 10 years of experience in interior design, John specializes in modern and contemporary spaces.'
    },
    {
      name: 'Mahima Mishra',
      role: 'Design Consultant',
      image: 'https://th.bing.com/th/id/OIP.N8PL9mRkMjN8X2tPVF58tgHaNi?w=184&h=338&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Sarah brings creativity and functionality together, focusing on sustainable and eco-friendly design solutions.'
    },
    {
      name: 'Rajat',
      role: 'Project Manager',
      image: 'https://th.bing.com/th/id/OIP.4beP5aBf1hQoLLj_TGKmXAHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Mike ensures smooth execution of all projects, coordinating between clients and design teams.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About InteriorHub</h1>
          <p>Transforming spaces into beautiful, functional environments</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>Founded in 2024, InteriorHub has been at the forefront of revolutionary interior design solutions. We believe in creating spaces that not only look beautiful but also enhance the quality of life for our clients.</p>
              <p>Our platform brings together the best interior designers and customers, making professional design services accessible to everyone. With our innovative approach and dedication to excellence,helped transform thousands of spaces into dream environments.</p>
            </div>
            <div className="story-image">
              <img src="https://images.designtrends.com/wp-content/uploads/2016/04/16123629/Modern-Office-Workspace-Interior.jpg" alt="Interior design workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <Phone size={20} />
                  <p>+91 7800328133</p>
                </div>
                <div className="info-item">
                  <Mail size={20} />
                  <p>contact@interiorhub.com</p>
                </div>
                <div className="info-item">
                  <MapPin size={20} />
                  <p>GLA university , Mathura</p>
                </div>
                <div className="info-item">
                  <Clock size={20} />
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>

                <div className="social-links">
                  <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
                  <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                  <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;