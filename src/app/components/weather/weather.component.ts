import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData : any;
  weatherIconUrl: string = '';
  show : boolean = false;
  iconcode : any;
  
  constructor(
    private apiservice : ApiService
  ) { }

  ngOnInit(): void {
    this.apiservice.getWeatherData().subscribe(
      data => {
        this.weatherData = data;
        this.getWeatherIcon(data.weather[0].icon)
        // this.iconcode = data.weather[0].icon;
        this.show = true;
        console.log("data -> ", data);
      }
    )
  }

  getWeatherIcon(iconcode: any){
    this.weatherIconUrl = this.apiservice.getWeatherIconUrl(iconcode);

    // this.apiservice.getIconWeather(iconcode).subscribe(
    //   data => {
    //     console.log("data", data);
    //   }
    // )
  }

}
