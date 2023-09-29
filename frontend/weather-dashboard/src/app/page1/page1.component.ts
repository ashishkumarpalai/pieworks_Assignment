import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  items: any[] = [];
  newEntry: any = {};
  selectedItem: any | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.items = await this.weatherService.getWeatherData().toPromise();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async addEntry() {
    try {
      const response = await this.weatherService.addWeatherData(this.newEntry).toPromise();
      console.log('Entry added:', response);
      this.fetchData(); // Refresh the data after adding
      this.newEntry = {}; // Clear the new entry form
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  }
  

  

  async editItem(item: any) {
    this.selectedItem = { ...item };
  }
// Inside your updateEntry() function
async updateEntry() {
  if (this.selectedItem) {
    try {
      const response = await this.weatherService.editWeatherData(this.selectedItem.id, {
        city: this.selectedItem.city,
        temperature: this.selectedItem.temperature,
        humidity: this.selectedItem.humidity,
      }).toPromise();
      console.log('Entry updated:', response);
      this.fetchData(); // Refresh the data after updating
      this.selectedItem = null; // Clear the selected item
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        console.error('HTTP Error:', error.status, error.statusText);
        // Handle the error here or display a user-friendly error message
      } else {
        console.error('Error updating entry:', error);
      }
    }
  }
}

 
  async deleteItem(id: number) {
    try {
      const response = await this.weatherService.deleteWeatherData(id).toPromise();
      console.log('Entry deleted:', response);
      this.fetchData();
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  }
}
