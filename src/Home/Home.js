import React, { useEffect } from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pizzfeature from './Images/pizzfeature.jpg';
import Foodengine from './Images/Foodengine.jpg';
import feedback2 from './Images/feedback2.jpg';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categorized from './Images/categorized.jpg';
import catagory from './Images/catagory.jpg';
import best12 from './Images/best12.jpg';
import best14 from './Images/best14.jpg';
import delicious from './Images/delicious.jpg';
import Order from './Images/Order.jpg';
import important from './Images/important.png';
import Ol from './Images/Ol.jpg';
import many from './Images/many.jpg';
import A from "./Images/A.png";
import good1 from './Images/good1.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="food-gallery"></div>
      
      <div className='container1'>
        <h2 className='orange' data-aos="fade-down" data-aos-delay="400" >AiFeedback Filtering</h2>
        
 
        <Link to="/contact" exact>
          <button className="feedback-button" data-aos="fade-up" data-aos-delay="800" style={{color:"White"}}>Get Started</button>
        </Link>
      </div>
      
      <div className='topic'>
        <h2 style={{ fontSize: '40px', padding: '20px' }}>Categorized feedbacks made with Ai Filter</h2>
        
        <Slider
          infinite={true}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          centerMode={true}
          autoplaySpeed={2000}
          className="slider-container"
        >
          <div className="slide">
            <img src={catagory} alt='categorized' className="slide-image" data-aos="fade-right" style={{borderRadius:'40px', padding: "40px", width: "700px", height: "400px" }}></img>
          </div>
          <div className="slide">
            <img src={best12} alt='categorized' className="slide-image" data-aos="fade-right" style={{borderRadius:'10px', padding: "40px", width: "700px", height: "400px" }}></img>
          </div>
          <div className="slide">
            <img src={good1} alt='categorized' className="slide-image" data-aos="fade-right" style={{borderRadius:'10px', padding: "40px", width: "700px", height: "400px" }}></img>
          </div>
          <div className="slide">
            <img src={many} alt='categorized feedbacks' className="slide-image" style={{borderRadius:'10px', padding: "30px", width: "700px", height: "380px" }} ></img>
          </div>
          <div className="slide">
            <img src={Ol} alt='categorized' className="slide-image" data-aos="fade-right" style={{borderRadius:'10px', padding: "40px", width: "700px", height: "400px" }}></img>
          </div>
          <div className="slide">
            <img src={categorized} alt='categorized feedbacks' className="slide-image" style={{borderRadius:'10px', padding: "30px", width: "700px", height: "380px" }} ></img>
          </div>
          <div className="slide">
            <img src={important} alt='categorized' className="slide-image" data-aos="fade-right" style={{borderRadius:'10px', padding: "40px", width: "700px", height: "400px" }}></img>
          </div>
        </Slider>
      </div>
      <label style={{fontSize:"40px", marginLeft:"500px",fontFamily:"sans-serif"}}>Satisfaction is our aim</label>
      
    
      <div className='satisfaction'>
      <label data-aos="fade-right" data-aos-delay="190" style={{ padding: '40px',fontSize:'30px',fontFamily:'fantasy' }}>SATISFACTION!</label>
        <label data-aos="fade-in" data-aos-delay="290" style={{ padding: '40px',fontSize:'25px' ,textAlign: 'center' }}>AiFeedback Filter for satisfaction feedbacks<br/><br/> "The goal as a company is to have customer<br/>service that is not just the best but legendary." - Sam Walton</label>
        <img data-aos="fade-left" data-aos-delay="190" src={pizzfeature} alt='pizza' style={{ borderRadius:'10px',width: '500px', height: '400px' }}></img>
      </div>
      <div>
        <label style={{fontSize:"40px", marginLeft:"300px",fontFamily:"sans-serif", paddingBottom:'30px'}}>Reliable Delivery Services: Punctuality Guaranteed! <br/></label>
      </div>
      <div className='file'>
        <img data-aos="fade-right" data-aos-delay="150" src={Foodengine} alt='chicken' style={{ borderRadius:'10px',width: '500px', height: '400px' , marginLeft: '70px' }}></img>
        <label data-aos="fade-down" data-aos-delay="150" style={{ fontSize: '23px', padding: '40px', fontFamily: '', textAlign: 'center' }}>Timing is our main goal setting, <br/> beauFoodDelivery us apart from the rest of the competitives</label>
        <label data-aos="fade-left" data-aos-delay="150" style={{ fontSize: '35px', padding: '40px',marginLeft:'40px' }}>TIMING!</label>
      </div>
      
      <div>
        <label style={{fontSize:"40px", marginLeft:"500px",fontFamily:"sans-serif"}}>We utilize the harmonized with people</label>
      </div>

      <div className='satisfaction'>
      <label data-aos="fade-right" data-aos-delay="190" style={{ padding: '40px',fontSize:'30px',fontFamily:'fantasy' }}>EXCELLENCE!</label>
        <label data-aos="fade-right" data-aos-delay="150" style={{ marginLeft: '20px', padding: '50px', fontSize: '22px' }}><br/>Experience perfection with our food delivery service. Enjoy personalized, seamless interactions as we bring your orders to your doorstep, ensuring a delightful experience from start to finish.</label>
        <img data-aos="fade-left" data-aos-delay="150" src={feedback2} alt='order' style={{ borderRadius:'10px',width: '500px', height: '400px'  }}></img>
      </div>
      

      <div>
        <label style={{fontSize:"40px", marginLeft:"500px",fontFamily:"sans-serif"}}>Deliverying in Ordered Accuracy</label>
      </div>
      <div className='file'>
        <img data-aos="fade-right" data-aos-delay="150" src={A} alt='chicken' style={{ borderRadius:'10px',width: '500px', height: '400px' , marginLeft: '70px' }}></img>
        <label data-aos="fade-down" data-aos-delay="150" style={{ fontSize: '23px', padding: '40px', fontFamily: '', textAlign: 'center' }}>Experience the convenience and reliability of our food delivery service, where we deliver your orders with precision and accuracy, ensuring that each dish arrives intact and in the exact order you desire.</label>
        <label data-aos="fade-left" data-aos-delay="150" style={{ fontSize: '35px', padding: '40px',marginLeft:'40px',marginTop:'30px' }}>PRECISION!</label>
      </div>

      <div class="footer-body">
  <div class="column">
    <h3>Beu foodDelivery</h3>
    <p>focus on customer satisfaction, timely delivery, and accurate orders.</p>
   
  </div>
  <div class="column">
    <h4>About Us</h4>
    <ul>
      <li>People</li>
      <li>Satisfaction</li>
      <li>Late Delivery</li>
      <li>Person Interaction</li>
      <li>Accuracy</li>
    </ul>
  </div>
  <div class="column">
    <h4>Contact Us</h4>
    <p>123 Main Street</p>
    <p>City, State, ZIP</p>
    <p>Phone: 123-456-7890</p>
    <p>Email: info@beufooddelivery.com</p>
  </div>
</div>
      
<div className="footer" style={{ textAlign: "center", fontSize: "14px", color: "#888" }}>
  <p>
    &copy; {new Date().getFullYear()} Firaol Terefe Portfolio. All rights reserved.
  </p>
</div>
    </div>
  );
};

export default Home;