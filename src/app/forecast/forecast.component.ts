import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  todayWeather:CurrentWeather;
  constructor(private ws:WeatherService) { }

  ngOnInit() {
    
  }

}
