// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   constructor() { }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class WeatherService {
//   private apiUrl = 'https://pieworks-mysql.onrender.com/api';

//   constructor(private http: HttpClient) {}

//   getWeatherData(page: number, pageSize: number) {
//     return this.http.get(`${this.apiUrl}/weather?page=${page}&pageSize=${pageSize}`);
//   }

//   addWeatherData(data: any) {
//     return this.http.post(`${this.apiUrl}/weather`, data);
//   }

//   editWeatherData(id: number, data: any) {
//     return this.http.put(`${this.apiUrl}/weather/${id}`, data);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class WeatherService {
//   private apiUrl = 'https://pieworks-mysql.onrender.com/api/weather';

//   constructor(private http: HttpClient) {}

//   getWeatherData() {
//     return this.http.get(this.apiUrl);
//   }

//   addWeatherData(data: any) {
//     // Implement logic to add data if needed
//   }

//   editWeatherData(id: number, data: any) {
//     // Implement logic to edit data if needed
//   }
//   deleteWeatherData(id: number) {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://pieworks-mysql.onrender.com/api/weather';

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addWeatherData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  
  editWeatherData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  

  deleteWeatherData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
