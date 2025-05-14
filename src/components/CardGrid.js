import React from 'react';
import HoverCard from './cards';
import './cards.css';

const CardGrid = () => {
  const cards = [
    {
      title: "Web Development skills",
      description1: "HTML,CSS,JavaScript,BOOTSTRAP",
      description2: "REACT FOR DYNAMIC FRONTEND(LEARNING)",
      description3: "WORDPRESS FOR POWERFULL CMS SITES",
      description4: "BY vibe coding and SEO FOR BETTER RANKINGS",

      imageUrl: "/images/web.jpg",
      buttonText: "View Projects"
    },
    {
      title: "Digital Marketing skills",
      description1: "SEO,SEM,SMO,SMM,EMAIL MARKETING",
      description2: "CONTENT MARKETING,SOCIAL MEDIA MARKETING",
      description3: "ADVERTISING,BRANDING,MARKETING STRATEGY",
      description4: "AI AUTOMATION,MARKETING AUTOMATION",
      imageUrl: "/images/digital.png",
      buttonText: "View Projects"
    },
    {
      title: "KPI & market analysis ",
      description1: "GOOGLE ANALYTICS, META ANALYTICS",
      description2: "GOOGLE SHEET,EXCEL,POWER BI",
      description3: "REAL TIME DASHBOARDS,DATA VISUALIZATION",
      description4: "PYTHON PANDAS AND MATPLOTLIB",
      imageUrl: "/images/data.jpeg",
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