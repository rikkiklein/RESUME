import React, { Component } from 'react';
import '../CSS/Resume.css';

class Column2 extends Component {
  render() {
    return (
      <div className="App">
        <div className="col2-outer-container">
          (917) 574-1120 <br/>
          rifkarabinowitz@gmail.com <br/>
          LinkedIn: rifkarabinowitz <br/>
          GitHub: rikkirabz<br/>

        <h2>Skills</h2>
        <p>
          Web Development:<br/>
          HTML5, CSS, JavaScript, React.JS, JQuery, AJAX, JSON
        </p>
        <p>
          Back-End: <br/>
          Node.JS, MongoDB, Ruby, Ruby on rails
        </p>
        <p>
          Programming: <br/>
          MySQL, PHP, Java, C++
        </p>
        <p>
          Development Tools: <br/>
          Git, GitHub, MySQL Workbench, Eclipse, Android Studio, Atom
        </p>


        </div>
      </div>
    );
  }
}

export default Column2;
