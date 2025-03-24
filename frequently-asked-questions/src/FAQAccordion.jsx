import React, { useState } from "react";
import "./FAQAccordion.css"; // Import the CSS file
import { FaPlus, FaMinus } from "react-icons/fa6";


const faqs = [
  {
    question: "Why do I need to use a Design System?",
    answer: "A design system helps maintain consistency across your application by providing reusable UI components and design principles."
  },
  {
    question: "Is there a preview or a free trial available?",
    answer: "Yes! We offer a free preview so you can explore our design system before making a purchase."
  },
  {
    question: "Where can I purchase AlignUI Design System?",
    answer: "You can purchase it from our official website."
  },
  {
    question: "What are the recent updates and enhancements in AlignUI?",
    answer: "Our recent updates include new UI components, performance improvements, and bug fixes."
  },
  {
    question: "How do I install AlignUI Design System in Figma?",
    answer: "You can install it from the Figma community by searching for AlignUI Design System."
  },
  {
    question: "Can I use AlignUI Design System for commercial projects?",
    answer: "Yes, you can use it for both personal and commercial projects."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <p>Find questions and answers related to the design system, purchase, updates, and support.</p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="icon">{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div className="faq-answer">{openIndex === index && <p>{faq.answer}</p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
