import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BannerFeedback from './BannerFeedback.jpg';

const Testimonials = () => {
  const [feedback, setFeedback] = useState('');
  const [options, setOptions] = useState([
    {
      name: "Dissatisfied",
      color: "teal",
      value: 5123,
      checked: false,
      tooltip: "Check this box if you are not satisfied with the food taste."
    },
    {
      name: "Delivery person interaction",
      color: "teal",
      value: 8955,
      checked: false,
      tooltip: "Check this box If you encountered inconvenience with the delivery person interaction."
    },
    {
      name: "Late delivery",
      color: "teal",
      value: 2324,
      checked: false,
      tooltip: "Check this box if you get late delivery than the time specified."
    },
    {
      name: "Order inaccuracy",
      color: "teal",
      value: 9876,
      checked: false,
      tooltip: "Check this box if you received order inaccuracy service."
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const formRef = useRef(null); // Create a ref for the form element

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
      const response = await fetch('http://localhost:5000/review/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
         
      if (response.ok) {
        // Feedback submitted successfully
        alert("Feedback submitted successfully!");
        setFeedback(''); // Reset the feedback state
        const resetOptions = options.map(option => ({ ...option, checked: false })); // Reset the options state
        setOptions(resetOptions); // Reset the form
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
        <form ref={formRef} onSubmit={handleSubmit} data-aos="fade-up">
        <div>
  <label htmlFor="feedback" className="feedback-label" data-aos="fade-up">Your Feedback:</label>
  <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} className="feedback-textarea" data-aos="fade-up" required />
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