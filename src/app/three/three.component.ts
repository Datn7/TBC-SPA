import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

@Component({
	selector: 'app-three',
	templateUrl: './three.component.html',
	styleUrls: [ './three.component.css' ]
})
export class ThreeComponent implements OnInit {
	name = 'Angular';

	constructor() {
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 5;

		var enableFog = true;
		if (enableFog) {
			scene.fog = new THREE.FogExp2(0xffffff, 0.15);
		}

		var pontLight = new THREE.PointLight(0xffffff, 3);

		pontLight.add(sphereMesh);
		scene.add(pontLight);
		pontLight.position.y = 2;

		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(680, 420);
		renderer.setClearColor('rgb(255,99,71)');
		document.body.appendChild(renderer.domElement);

		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
		var cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		cube.position.y = 1;

		var plane = new THREE.PlaneGeometry(3, 3);
		var planeMtrl = new THREE.MeshPhongMaterial({ color: 'rgb(255,99,71)' });
		var planeMesh = new THREE.Mesh(plane, planeMtrl);
		scene.add(planeMesh);
		planeMesh.rotation.x = 30;

		var sphere = new THREE.SphereGeometry(0.3, 15, 15);
		var sphereMtrl = new THREE.MeshBasicMaterial({ color: 'rgb(255,255,255)' });
		var sphereMesh = new THREE.Mesh(sphere, sphereMtrl);
		scene.add(sphereMesh);

		var animate = function() {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

		animate();
	}

	ngOnInit(): void {}
}
