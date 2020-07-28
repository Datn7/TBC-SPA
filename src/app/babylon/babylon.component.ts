import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { BabylonService } from '../_services/babylon.service';

@Component({
	selector: 'app-babylon',
	templateUrl: './babylon.component.html',
	styleUrls: [ './babylon.component.css' ]
})
export class BabylonComponent implements OnInit {
	@ViewChild('babylonCanvas', { static: true })
	public babylonCanvas: ElementRef<HTMLCanvasElement>;

	constructor(private _babylonService: BabylonService) {}

	ngOnInit(): void {
		this._babylonService.createScene(this.babylonCanvas);
		this._babylonService.animate();
	}
}
