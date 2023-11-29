import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase: string = environment.urlBase;

  constructor(
    private http: HttpClient, 
  ) { }

  getWeatherData() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=-33.036&lon=-71.62963&units=metric&appid=67f7327d33078152583ee8acc8355184";
    return this.http.get(url).pipe(
      map((response: any) => {
        return response; // You might need to parse the response here if needed
      })
    );
  }

  getWeatherIconUrl(iconCode: string): string {
    const baseUrl = 'https://openweathermap.org/img/wn/';
    const size = '@4x'; // Change to '@2x' for a different resolution if needed
    return `${baseUrl}${iconCode}${size}.png`;
  }

  postMethod(params: any) {
    const url = environment.urlBase + "api/post";
    // return this.http.post(url, params);
  }

  getUsers(){
    const url = this.urlBase + 'green_lamp';
    return this.http.get<any>(url);
  }

  loginUser(params: any) : Observable<any>{
    const url = this.urlBase + 'login';
    return this.http.post<any>(url, params);
  }
  

}
