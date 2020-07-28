import { Injectable, NgZone, ElementRef } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import * as BABYLON from 'babylonjs';

@Injectable({
	providedIn: 'root'
})
export class MyBabylonService {
	engine: BABYLON.Engine;
	scene: BABYLON.Scene;
	_canvas: HTMLCanvasElement;
	camera: BABYLON.ArcRotateCamera;
	light: BABYLON.HemisphericLight;

	constructor(private ngZone: NgZone, private windowRef: WindowRefService) {}

	createMyScene(babylonCanvas: ElementRef<HTMLCanvasElement>): void {
		this._canvas = babylonCanvas.nativeElement;
		this.engine = new BABYLON.Engine(this._canvas, true);

		this.camera = new BABYLON.ArcRotateCamera('Camera', 0, 1, 1.1, new BABYLON.Vector3(5, 13, 11), this.scene);
		this.camera.setTarget(BABYLON.Vector3.Zero());
		this.camera.attachControl(this._canvas, true);

		this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(3, 3, 0), this.scene);
		var mymat = new BABYLON.StandardMaterial('myMaterial', this.scene);
		mymat.diffuseTexture = new BABYLON.Texture(
			'https://raw.githubusercontent.com/Datn7/myMeshes/master/yumbaraFBX_lambert1_BaseColor.png',
			this.scene
		);
		mymat.specularTexture = new BABYLON.Texture(
			'https://raw.githubusercontent.com/Datn7/myMeshes/master/yumbaraFBX_lambert1_Roughness.png',
			this.scene
		);
		mymat.bumpTexture = new BABYLON.Texture(
			'https://raw.githubusercontent.com/Datn7/myMeshes/master/yumbaraFBX_lambert1_Normal.png',
			this.scene
		);

		BABYLON.SceneLoader.ImportMesh(
			'',
			'https://raw.githubusercontent.com/Datn7/myMeshes/master/',
			'grenade.babylon',
			this.scene,
			function(newMeshes) {
				var mymesh = newMeshes[0];
				mymesh.material = mymat;
			}
		);

		this.scene.registerAfterRender(() => {
			//this.sphere.rotate(new BABYLON.Vector3(0, 1, 0), 0.02, BABYLON.Space.LOCAL);
		});
	}

	createMyAnimate(): void {
		this.ngZone.runOutsideAngular(() => {
			const rendererLoopCallback = () => {
				this.scene.render();
			};

			if (this.windowRef.document.readyState !== 'loading') {
				this.engine.runRenderLoop(rendererLoopCallback);
			} else {
				this.windowRef.window.addEventListener('DOMContentLoaded', () => {
					this.engine.runRenderLoop(rendererLoopCallback);
				});
			}

			this.windowRef.window.addEventListener('resize', () => {
				this.engine.resize();
			});
		});
	}
}
