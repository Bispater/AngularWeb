import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase: string = environment.urlBase;

  constructor(
    // private http: HttpClient, 
  ) { }

  getMethod(){
    const url = environment.urlBase + 'api/getData'
    // return this.http.get<any>(url);
  }

  postMethod(params : any){
    const url = environment.urlBase + "api/post";
    // return this.http.post(url, params);
  }

}
