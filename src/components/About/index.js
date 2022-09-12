import React from "react";
import Avatar from "../../assets/images/avatar.jpg";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className="about">
      <img id="avatar" src={Avatar} alt="avatar of kaia" />
      <p id="about-me">
        Hello! My name is Kaia. I am a full stack developer residing in Eugene,
        Oregon. I have a passion for sleek, intuitive designs. My front end
        skills include HTML, CSS, Javascript, React, Handlebars, Bootstrap,
        jQuery, and AJAX. My back end skills include Node.js, Express.js, MySQL,
        Sequelize, MongoDB, Mongoose, and GraphQL. I am a fast learner with an
        exceptional eye for detail who specializes in the MERN stack.
      </p>

      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("This is a test!")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
}

export default About;
