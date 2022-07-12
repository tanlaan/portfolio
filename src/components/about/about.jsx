import React from 'react';
import pic01 from './images/pic01.jpg';

const About = () => {
  return (
    <section id="one" class="main style1">
      <div class="container">
        <div class="row gtr-150">
          <div class="col-6 col-12-medium">
            <header class="major">
              <h2>Lorem ipsum dolor adipiscing<br />
              amet dolor consequat</h2>
            </header>
            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
          </div>
          <div class="col-6 col-12-medium imp-medium">
            <span class="image fit"><img src={pic01} alt="" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
