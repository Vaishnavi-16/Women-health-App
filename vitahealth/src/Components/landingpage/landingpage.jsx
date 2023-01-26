import React from "react";
import "./landingpage.css"

import { Link } from "react-router-dom";

function LandingPage(){
    return(
    <>
       <section id="home">
<div className="row">
    <div className="col-md-6 col-sm-12 col-12">
      <div className="first-text">
          <p className="health">Healthy</p>
      </div>
      <div className="second-text">
        <p className="health">Pregnancy</p>
      </div>
      <p className="third-text">Track your pregnancy week by week, engage in mommy-to-mom conversation, and discover details on the growth of the baby, signs of pregnancy, and more. </p>

      <div className="buttons-home">
     <Link to="/login">
     <button type="button" className="btn btn-one">Sign In</button>
     
     </Link>

      <Link to="/signup">
      <button type="button" className="btn btn-two">Sign Up</button>
      
      </Link>
      </div>
    </div>

    <div className="col-md-6 col-sm-12 col-12">
      <img className="home-image" src="https://img.freepik.com/premium-vector/pregnant-woman-concept-cute-cartoon-style_113065-977.jpg?w=826" alt="pregnant woman"/>
    </div>
  </div>
</section>


<section id="features">
    <div className="row">
    <div className="feature-box col-md-4">
      <i className="big-icon fa fa-calendar fa-4x"></i>
      <p className="text-heading">
      Weekly advices</p>
      <p className="grey-text">Dos and don'ts for every week of your pregnancy for the welfare of your baby's health.</p>
    </div>
    
    
    <div className="feature-box col-md-4">
      <i className="big-icon fa fa-comments-o fa-4x"></i>
      <p className="text-heading">
      Chatroom
    </p>
    <p className="grey-text">Keep in touch with the other mommys and never feel overwhelmed.</p>
    </div>
    <div className="feature-box col-md-4">
      <i className="big-icon fa fa-list-alt fa-4x"></i>
      <p className="text-heading">
      Task list</p>
    <p className="grey-text">Note down your everyday work to keep a better care of the baby and yourself.</p>
    </div>
    
  </div>
  </section>



  <section id="sign-in">

    <p className="end">
      Join us to smoothen your pregnancy journey.</p>
      <div className="button-download-end">
     <button type="button"className="btn btn-dark btn-lg last-button">Sign Up</button>
     <button type="button" className="btn btn-light btn-lg last-button">Sign In</button>
   </div>
   </section>
   
   <footer id="footer">
     <div className="icons-last">
     <a href="" className="last-link" title="twitter"><i className="fab fa-twitter  final-icon"></i></a>
     <a href="" className="last-link" title="facebook"><i className="fab fa-facebook  final-icon"></i></a>
     <a href="" className="last-link" title="instagram"><i className="fab fa-instagram  final-icon"></i></a>
      <a href="" className="last-link" title="Email us"><i className="fas fa-envelope  final-icon "></i></a>
     </div>
     <p className="footer-text">© Copyright Baby</p>
    </footer>
    
    </>


    );
}

export default LandingPage;