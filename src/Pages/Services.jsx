import { useState } from "react";
import "../App.css";
import NavComponent from "../Components/Nav";
import ServiceComponent from "../Components/Service";
import { useNavigate } from "react-router-dom";
import React from "react";

const Service = () => {
  const navigate = useNavigate();

  const goToPollForm = () => {
    navigate("/poll-form");
  };

  return (
    <div className="serviceContainer">
      {/* Background photo */}
      <section className="serviceHeader">
        <nav>
          <a href="service.html">
          <img src="pollifylogo.jpg"/>
          </a>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-close" onClick={() => {}}></i>
            <NavComponent />
          </div>
          <i className="fa fa-bars" onClick={() => {}}></i>
        </nav>
        <div className="text-box">
          <h1>Pollify brings to you</h1>
          <p> </p>
        </div>
      </section>
      {/* Services section */}
      <section className="Services">
        <h1>Services</h1>
        <br />
        <br />
        <p>
          
        </p>
        <div className="row">
          <ServiceComponent
            title={"Live Polls"}
            description={"Create and launch polls within seconds."}
            actionButton={<button onClick={goToPollForm}>Create Poll</button>}
          />
          <ServiceComponent
            title={"Surveys"}
            description={"COMING SOON"}
          />
          <ServiceComponent
            title={"Quizzes"}
            description={"COMING SOON"}
          />
          <ServiceComponent
            title={"Analytics"}
            description={"COMING SOON"}
          />
        </div>
      </section>
      {/* Contact section */}
      <section className="contact">
        <div className="row-col" align="center">
          <h1>Contact Us</h1>
          <p>
            <b>Email</b>: pollify@gmail.com <br />
            <b>Phone</b>: +233 54 098 5123 <br />
            <b>Instagram</b>: @Pollify_polls <br />
            <b>Facebook</b>: Pollify Polls
          </p>
        </div>
        <br />
        <br />
        <br />
        <p align="center">&copy;Pollify's Copyright 2024</p>
      </section>
    </div>
  );
};

export default Service;

