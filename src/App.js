import './assets/sass/main.scss';
import pic01 from './images/pic01.jpg';
import pic02 from './images/pic02.jpg';
import pic03 from './images/pic03.jpg';
import pic04 from './images/pic04.jpg';

function App() {
  return (
    <>
    {/* Header */}
			<section id="header">
				<div class="inner">
					<span class="icon solid major fa-cloud"></span>
					<h1>Hi, I'm <strong>Photon</strong>, another fine<br />
					little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
					<p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
					lobortis feugiat sapien sed etiam volutpat accumsan.</p>
					<ul class="actions special">
						<li><a href="#one" class="button scrolly">Discover</a></li>
					</ul>
				</div>
			</section>

		{/* <!-- One --> */}
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

		{/* <!-- Two --> */}
			<section id="two" class="main style2">
				<div class="container">
					<div class="row gtr-150">
						<div class="col-6 col-12-medium">
							<ul class="major-icons">
								<li><span class="icon solid style1 major fa-code"></span></li>
								<li><span class="icon solid style2 major fa-bolt"></span></li>
								<li><span class="icon solid style3 major fa-camera-retro"></span></li>
								<li><span class="icon solid style4 major fa-cog"></span></li>
								<li><span class="icon solid style5 major fa-desktop"></span></li>
								<li><span class="icon solid style6 major fa-calendar"></span></li>
							</ul>
						</div>
						<div class="col-6 col-12-medium">
							<header class="major">
								<h2>Lorem ipsum dolor adipiscing<br />
								amet dolor consequat</h2>
							</header>
							<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
							<p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
							<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
						</div>
					</div>
				</div>
			</section>

		{/* <!-- Three --> */}
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

		{/* <!-- Four --> */}
			<section id="four" class="main style2 special">
				<div class="container">
					<header class="major">
						<h2>Ipsum feugiat consequat?</h2>
					</header>
					<p>Sed lacus nascetur ac ante amet sapien.</p>
					<ul class="actions special">
						<li><a href="#" class="button wide primary">Sign Up</a></li>
						<li><a href="#" class="button wide">Learn More</a></li>
					</ul>
				</div>
			</section>

		{/* <!-- Footer --> */}
			<section id="footer">
				<ul class="icons">
					<li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
					<li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
					<li><a href="#" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
				</ul>
			</section>
    </>
  );
}

export default App;
