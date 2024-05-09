import { useState } from "react";
import "../App.css";
import NavComponent from "../Components/Nav";
import ServiceComponent from "../Components/Service";

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="header">
        <nav>
          <a href="about.html">
            <img src="pollifylogo.jpg" />
          </a>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-close" aria-hidden="true" onClick={
              () => {
                const navLinks= document.getElementById("navLinks");
                function hideMenu() {
                    navLinks.style.right ="-200px";
              }
            }}></i>
            <NavComponent />
          </div>
          <i className="fa fa-bars" aria-hidden="true" onClick={
            () => {
              const navLinks= document.getElementById("navLinks");
              function showMenu() {
                  navLinks.style.right ="0";
              }
            }
          }></i>
        </nav>
      </section>
      <div className="text-box">
        <h1>The Power to decide!</h1>
        <p></p>
      </div>
      <section className="AboutUS">
        <div className="row">
          <div className="about-col">
            <h1>About Us</h1>
            <br />
            <p align="center">
              Created by{" "}
              <b>
                Faith Akadi, Elizabeth Williams, Rebecca Frempong-Mensah and
                Christiana Anim Boateng
              </b>
            </p>
            <br />
            <br />
            <b> Welcome to our innovative polling app</b>
            <br />
            <b>
              {" "}
              Empower your voice with pollify where your opinions matter to make
              the best decisions
            </b>
            <br />
            <br />
            Get a convenient polling app which costs less and gives a faster
            optimised response
            <br />
          <br />

          <br />
          <br />
          <p>
            Pollify's layout is centered within the viewport and styled with a
            clean and modern aesthetic. <br /> The main functionality allows
            users to; <br /> vote for one options and Upon selecting an option
            and submitting their vote, the application dynamically updates to
            display the voting results. <br />
            Each option's percentage of total votes is calculated <br />
            and represented visually with a colored bar, while the exact
            percentage is displayed alongside it. <br />
            for selection and a submit button to finalize the vote . <br /> The
            interface is user-friendly, with intuitive radio buttons <br />{" "}
            Additionally, if a user forgets to select an option before
            submitting,
            <br />
            an alert prompts them to make a selection before proceeding.
            <br />
            Overall, this polling application provides a straightforward way to
            gather <br /> and visualize voting data in real-time, making it
            suitable for <br /> various online surveys or feedback gathering
            purposes.{" "}
          </p>
          </div>
        
        <div className="about-col">
          <img src="pollifylogo.jpg" />
        </div>
        </div>
      </section>{" "}
      <br />
      <br />
      <br />
      <br />
      <p align="center">&copy;Pollify's Copyright 2024 </p>
      <br />
      <br />

    </>
  );
};

export default About;
