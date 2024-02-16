import React , { useEffect } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import 'intersection-observer';
import beu1 from './beu1.jpg';


const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({

      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",   
      "width": activeWidthNewAnimWidth + "px"

      
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 400);
    });
    
  }, []);

  return (
  <nav className='navbar navbar-expand-lg navbar-mainbg'>
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
      <img src={beu1} alt="BeuFoodDelivery AiFilter Logo" style={{ borderRadius:'30px',width: '70px', height: 'auto', marginLeft:'20px' }} />
        
      </NavLink>

      <button
      className='navbar-toggler'
      onClick = {function (){animation();}}
      type='button' data-toggle="collapse" data-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
        <i className='fas fa-bars text-white'></i>
      </button>
    
    
      <div className='collapse navbar-collapse' id='navbarSupportedContent' style={{ marginLeft:'210px'}}>
        <ul className='navbar-nav ml-auto'>
          <div className='hori-selector'>
            <div className='left'></div>
            <div className='right'></div>
          </div>

          <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>
           
          
           <li className='nav-item'>
            <NavLink className="nav-link" to="/testimonial" exact>
              <i
              className='far fa-chart-bar'>
                
              </i>User Feedback
            </NavLink>
           </li>
          <li className='nav-item'>
            <NavLink className="nav-link" to="/contact" exact>
              <i
              className='far fa-copy'>
                
              </i>Login/Sign Up
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link" to = "/feedback" exact>
              <i
              className='far fa-don'>

              </i>Feedbac-Filter-Ai
            </NavLink>
          </li>
        </ul>
      </div>

  </nav>
  )
}
export default Navbar;