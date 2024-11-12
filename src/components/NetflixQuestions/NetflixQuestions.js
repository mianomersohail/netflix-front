import React, { useState } from 'react';
import './NetFlixQuestions.css'
 const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {question}
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    { question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.' },
    { question: 'How much does Netflix cost?', answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.' },
  ];

  return (
    <div className="faq-section">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};
export default FAQSection;
