import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './current-weather';
import { map } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  todayWeather:CurrentWeather = new CurrentWeather('Allahabad', '42', 'https://images.app.goo.gl/Wb6dkfiUg4ELQztt6',
  'sunny', '45','28');
  location
  constructor(private http:HttpClient) { }

  weatherNow(){
    return this.current;
  }

  localWeather(){
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=64ba89152f7da79e5c6f697ecc87609f&units=imperial`)
        .pipe(map((response:Response) => response.json())).toPromise().then(
          (data) => {
            this.todayWeather = new CurrentWeather(data.name,
                                                    data.main.temp,
                                                    data.weather[0].icon,
                                                    data.weather[0].description,
                                                    data.main.temp_max,
                                                    data.main.temp_min);
              res(this.todayWeather);
          }
        )
      })
    })
  }
}
