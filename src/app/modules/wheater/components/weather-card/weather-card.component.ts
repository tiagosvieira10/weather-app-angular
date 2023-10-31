import { Component, Input, OnInit } from '@angular/core';
import { weatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{
  ngOnInit(): void {
    console.log('dados recebidos do componente pai', this.weatherDatasInput);
  }
  @Input() weatherDatasInput!: weatherDatas;
}
