import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { MyBabylonService } from '../_services/my-babylon.service';

@Component({
	selector: 'app-babylon-play',
	templateUrl: './babylon-play.component.html',
	styleUrls: [ './babylon-play.component.css' ]
})
export class BabylonPlayComponent implements OnInit {
	@ViewChild('myBabylonCanvas', { static: true })
	public myBabylonCanvas: ElementRef<HTMLCanvasElement>;

	constructor(private _myBabylon: MyBabylonService) {}

	ngOnInit(): void {
		this._myBabylon.createMyScene(this.myBabylonCanvas);
		this._myBabylon.createMyAnimate();
	}
}
