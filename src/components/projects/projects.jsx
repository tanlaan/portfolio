import React from 'react';
import pic02 from './images/pic02.jpg';
import pic03 from './images/pic03.jpg';
import pic04 from './images/pic04.jpg';

const Projects = () => {
  return (
    <section id="three" class="main style1 special">
      <div class="container">
        <header class="major">
          <h2>Adipiscing amet consequat</h2>
        </header>
        <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
        <div class="row gtr-150">
          <div class="col-4 col-12-medium">
            <span class="image fit"><img src={pic02} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul class="actions special">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
          <div class="col-4 col-12-medium">
            <span class="image fit"><img src={pic03} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul class="actions special">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
          <div class="col-4 col-12-medium">
            <span class="image fit"><img src={pic04} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul class="actions special">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
