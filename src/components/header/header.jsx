import React from 'react';
import { useEffect } from 'react'; 
import * as THREE from 'three';

const Header = () => {
  useEffect(() => {
    let scene, camera, renderer;
    let init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI/2;

      renderer = new THREE.WebGL1Renderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      animate();
    }
    let animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init()
  }, [])

  return (
    <section id="header">
      <div class="inner">
        <span class="icon solid major fa-bicycle"></span>
        <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
        little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
        <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
        lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        <ul class="actions special">
          <li><a href="#one" class="button scrolly">Discover</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
