import React, { Component } from 'react';
import '../CSS/Resume.css';

class Column1 extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-outer-container">
          <h1>Rifka Rabinowitz</h1>
          <h3>FullStack Web Developer</h3>
          <h2>Experience</h2>
          <div className="date-flex">
            <div className="left">General Assembly - New York, NY <br/>
            WEB DEVELOPMENT IMMERSIVE
            </div>
            <div className="right">June 2016-Present</div>
          </div>
          <p>Route Me - Calculated the shortest route between multiple destinations. <br/>
          TECH: HTML, CSS, React.js, Ruby and Ruby on Rails</p>

          <p>Weather Image API<br/>
            Allowed the user to search for weather and images using various API’s. <br/>
            TECH: HTML, CSS, JavaScript
          </p>

          <p>Math Trivia: <br/>
            Rendered a 2 player math trivia game in the browser using only the DOM. <br/>
            TECH: HTML, CSS, JavaScript
          </p>

          <div className="date-flex">
            <div className="left">CUNY Brooklyn College - Brooklyn, NY <br/>
              MYSQL/WEB DEVELOPER <br/>
              Worked under the supervision of Distinguished Professor Theodore Raphan Ph.D.
            </div>
            <div className="right">Jan 2015–Jan 2016</div>
          </div>

          <p>STAR PROGRAM: <br/>
            Created a scalable PHP based web application with a MySQL back-end to track the students, teachers and courses for the STAR early college and High School Program. Developed a method for multiple users to use the application simultaneously by updating the data in real time via MySQL transactions.<br/>
            TECH: PHP, MySQL, HTML, CSS, JavaScript
          </p>

          <div className="date-flex">
            <div className="left">CUNY Brooklyn College - Brooklyn, NY<br/>
              TEACHER’S ASSISTANT FOR DISTINGUISHED PROFESSOR THEODORE RAPHAN Ph.D<br/>
              Appointed as a teacher’s assistant for the Computer Architecture Course.
              
            </div>
            <div className="right">Aug 2015 – Jan 2016</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Column1;
