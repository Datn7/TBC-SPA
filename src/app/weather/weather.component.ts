import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weathers: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getWeatheres();
  }

  getWeatheres() {
    this._http.get('http://localhost:5000/weatherforecast').subscribe(
      (res) => {
        this.weathers = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
