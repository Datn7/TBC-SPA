import { Injectable, ElementRef, NgZone } from '@angular/core';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { WindowRefService } from './window-ref.service';

@Injectable({
	providedIn: 'root'
})
export class BabylonService {
	private canvas: HTMLCanvasElement;
	private engine: BABYLON.Engine;
	private camera: BABYLON.ArcRotateCamera;
	private scene: BABYLON.Scene;
	private light: BABYLON.HemisphericLight;
	private importedMesh: any;
	private myMaterial: BABYLON.StandardMaterial;

	constructor(private ngZone: NgZone, private windowRef: WindowRefService) {}

	createScene(canvas: ElementRef<HTMLCanvasElement>): void {
		this.canvas = canvas.nativeElement;

		this.engine = new BABYLON.Engine(this.canvas, true);

		this.scene = new BABYLON.Scene(this.engine);
		this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

		this.camera = new BABYLON.ArcRotateCamera('Camera', 0, 1, 1.1, new BABYLON.Vector3(5, 13, 11), this.scene);

		this.camera.setTarget(BABYLON.Vector3.Zero());

		this.camera.attachControl(this.canvas, true);

		this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(3, 3, 0), this.scene);

		var myMaterial = new BABYLON.StandardMaterial('myMaterial', this.scene);
		myMaterial.diffuseColor = BABYLON.Color3.Blue();

		this.importedMesh = BABYLON.SceneLoader.ImportMesh('', '/assets/', 'tbc.obj', this.scene, function(newMeshes) {
			var mymesh = newMeshes[0];
			mymesh.material = myMaterial;
		});

		this.scene.registerAfterRender(() => {
			//this.sphere.rotate(new BABYLON.Vector3(0, 1, 0), 0.02, BABYLON.Space.LOCAL);
		});
	}

	public animate(): void {
		// We have to run this outside angular zones,
		// because it could trigger heavy changeDetection cycles.
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
