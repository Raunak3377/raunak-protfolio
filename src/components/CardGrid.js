import React from 'react';
import HoverCard from './cards';
import './cards.css';

const CardGrid = () => {
  const cards = [
    {
      title: "Neuromarketing & Consumer psychology",
      description1: "Emotional trigger Mapping",
      description2: "Visual attention and optimization",
      description3: "Behavioral segmentation",
      description4: "A/B testing with Cognitive Insight",

      imageUrl: process.env.PUBLIC_URL + "/images/Deshpee-Brand-Blog-Img-12.webp",
      buttonText: "View Projects"
    },
    {
      title: "Digital Marketing skills",
      description1: "SEO,SEM,SMO,SMM,EMAIL MARKETING",
      description2: "CONTENT MARKETING,SOCIAL MEDIA MARKETING",
      description3: "ADVERTISING,BRANDING,MARKETING STRATEGY",
      description4: "AI AUTOMATION,MARKETING AUTOMATION",
      imageUrl: process.env.PUBLIC_URL + "/images/digital.png",
      buttonText: "View Projects"
    },
    {
      title: "KPI & market analysis ",
      description1: "GOOGLE ANALYTICS, META ANALYTICS",
      description2: "GOOGLE SHEET,EXCEL,POWER BI",
      description3: "REAL TIME DASHBOARDS,DATA VISUALIZATION",
      description4: "PYTHON PANDAS AND MATPLOTLIB",
      imageUrl: process.env.PUBLIC_URL + "/images/data.jpeg",
      buttonText: "View Projects"
    }
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <HoverCard
          key={index}
          title={card.title}
          description1={card.description1}
          description2={card.description2}
          description3={card.description3}
          description4={card.description4}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default CardGrid; 