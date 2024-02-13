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
import best16 from './Images/best16.jpg';
import important from './Images/important.png';
import Ol from './Images/Ol.jpg';
import computer from './Images/computer.webp';
import good1 from './Images/good1.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="food-gallery"></div>
      
      <div className='container1'>
        <h2 className='orange' data-aos="fade-down" data-aos-delay="400">AiFeedback Filtering</h2>
        <p className='jun' data-aos="fade-in" style={{ fontSize: "20px", backgroundColor: "brown", width: "500px", height: "200px", color: "white", margin: "right", padding: "10px", top: "40px" }}>
          Integrating beauFoodDelivery with the An AiFilter model is like orchestrating a symphony of culinary excellence. By seamlessly merging the power of advanced artificial intelligence with the convenience of food delivery, we create an unparalleled experience that caters to the discerning tastes of our customers
        </p>
 
        <Link to="/contact" exact>
          <button className="feedback-button" data-aos="fade-up">Give Feedback</button>
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
          autoplaySpeed={3000}
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
            <img src={delicious} alt='categorized feedbacks' className="slide-image" style={{borderRadius:'10px', padding: "30px", width: "700px", height: "380px" }} ></img>
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
        <label data-aos="fade-right" data-aos-delay="150" style={{ padding: '40px',fontSize:'25px' }}>AiFeedback Filter for satisfaction feedbacks<br/><br/> "The goal as a company is to have customer service<br/>that is not just the best but legendary." - Sam Walton</label>
        <img data-aos="fade-left" data-aos-delay="150" src={pizzfeature} alt='pizza' style={{ borderRadius:'10px',width: '500px', height: '400px' }}></img>
      </div>
      <div>
        <label style={{fontSize:"40px", marginLeft:"300px",fontFamily:"sans-serif", paddingBottom:'30px'}}>Reliable Delivery Services: Punctuality Guaranteed! <br/></label>
      </div>
      <div className='file'>
        <img data-aos="fade-right" data-aos-delay="150" src={Foodengine} alt='chicken' style={{ borderRadius:'10px',width: '500px', height: '400px' , marginLeft: '70px' }}></img>
        <label data-aos="fade-down" data-aos-delay="150" style={{ fontSize: '23px', padding: '70px', fontFamily: '', textAlign: 'center' }}>We Deliver Best with the Speed</label>
        <label data-aos="fade-left" data-aos-delay="150" style={{ fontSize: '23px', padding: '70px' }}>Timing is our main goal setting, <br/> beauFoodDelivery us apart from the rest of the competitives.</label>
      </div>
      
      <div>
        <label style={{fontSize:"40px", marginLeft:"500px",fontFamily:"sans-serif"}}>We utilize the harmonized with people</label>
      </div>

      <div className='satisfaction'>
        <label data-aos="fade-right" data-aos-delay="150" style={{ marginLeft: '20px', padding: '50px', fontSize: '22px' }}>We build harmonized interaction with customers,<br/> beauFoodDelivery with the best Agents<br/> and satisfaction knows no bounds.</label>
        <img data-aos="fade-left" data-aos-delay="150" src={feedback2} alt='order' style={{ borderRadius:'10px',width: '500px', height: '400px'  }}></img>
      </div>
      

      <div>
        <label style={{fontSize:"40px", marginLeft:"500px",fontFamily:"sans-serif"}}>We avoid any late Delivery</label>
      </div>
      <div className='file'>
        <img data-aos="fade-right" data-aos-delay="150" src={Foodengine} alt='chicken' style={{ borderRadius:'10px',width: '500px', height: '400px' , marginLeft: '70px' }}></img>
        <label data-aos="fade-down" data-aos-delay="150" style={{ fontSize: '23px', padding: '70px', fontFamily: '', textAlign: 'center' }}>We Deliver Best with the Speed</label>
        <label data-aos="fade-left" data-aos-delay="150" style={{ fontSize: '23px', padding: '70px' }}>Timing is our main goal setting, <br/> beauFoodDelivery us apart from the rest of the competitives.</label>
      </div>

      <div className='footer-body'>
        <div>Beu foodDelivery</div>
        <div>
          <p>We wil need to express the best explanation of the realm of the sourship</p>
          <ul>
            <li>people</li>
            <li>satisfaction</li>
            <li>late Delivery</li>
            <li>person interaction</li>
            <li>accurate </li>
          </ul>
        </div>
      </div>
      
      <div className='footer'>
        @Copyright  Firaol   Terefe   Portfolio
      </div>
    </div>
  );
};

export default Home;