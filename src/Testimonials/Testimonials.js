import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BannerFeedback from './BannerFeedback.jpg';

const Testimonials = () => {
  const [feedback, setFeedback] = useState('');
  const [options, setOptions] = useState([
    {
      name: "Dissatisfied",
      color: "#00ffff",
      value: 5123,
      checked: false,
      tooltip: "This option is for feedback related to food taste sweetness."
    },
    {
      name: "Delivery person interaction",
      color: "#00ffff",
      value: 8955,
      checked: false,
      tooltip: "If you encountered a problem with the delivery person interaction."
    },
    {
      name: "Late delivery",
      color: "#00ffff",
      value: 2324,
      checked: false,
      tooltip: "Choose this option if you get late delivery more than 30 min."
    },
    {
      name: "Order inaccuracy",
      color: "#00ffff",
      value: 9876,
      checked: false,
      tooltip: "Choose this option if you received order inaccuracy service."
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleOptionChange = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].checked = !updatedOptions[index].checked;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedOptions = options.filter(option => option.checked);

    // Prepare the data to be sent to the backend
    const data = {
      feedback,
      selectedOptions
    };

    try {
      // Send the data to the backend using an API
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Feedback submitted successfully
        alert("Feedback submitted successfully!");
      } else {
        // Handle error response from the backend
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors
      alert("An error occurred while submitting feedback. Please try again later.");
    }
  };

  return (
    <div className='main'>
      <div className="testimonials-container">
        <h2>Drop your feedback in the text field</h2>
        <h3 className="testimonials-heading" data-aos="fade-up">Your feedback</h3>
        <form onSubmit={handleSubmit} data-aos="fade-up">
          <div>
            <label htmlFor="feedback" className="feedback-label" data-aos="fade-up">Your Feedback:</label>
            <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} className="feedback-textarea" data-aos="fade-up" />
          </div>
          <div>
            <p className="options-label" data-aos="fade-up">Categories of Service feedbacks</p>
            {options.map((option, index) => (
              <div key={index} className="option-container" data-aos="fade-up">
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  checked={option.checked}
                  onChange={() => handleOptionChange(index)}
                  className="option-checkbox"
                />
                <label
                  htmlFor={`option-${index}`}
                  style={{ color: option.color }}
                  className="option-label"
                  title={option.tooltip} // Add tooltip using the title attribute
                >
                  {option.name}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="submit-button" data-aos="fade-up">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;