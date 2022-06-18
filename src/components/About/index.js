import React from 'react';
import Avatar from '../../assets/images/avatar.JPG'

function About() {
  return (
    <div>
      <img src={Avatar} alt='avatar of kaia' />
      <p id='about-me'> 
        Hello! My name is Kaia. I am a 22-year-old full stack web developer residing in Eugene, Oregon.
        My front end skills include HTML, CSS, Javascript, React, Handlebars, Bootstrap, jQuery, and AJAX.
        My back end skills include Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, and GraphQL.
        I am a fast learner with an exceptional eye for detail who specializes in the MERN stack.
      </p>
    </div>
  )
}

export default About;