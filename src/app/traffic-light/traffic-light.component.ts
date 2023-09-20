import { Component, OnInit } from '@angular/core';
import {config} from "rxjs";

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  config: any = {
    red: {
      duration: 4000,
      next: 'green',
    },
    yellow: {
      duration: 500,
      next: 'red',
    },
    green: {
      duration: 3000,
      next: 'yellow',
    },
  };

  stop: boolean = false;
  c: string = '';
  constructor() { }

  ngOnInit(): void {
    this.lights('red');
  }


  lights(color: string) {
    const {duration,next} = this.config[color];
    this.c = color;
    if(this.stop == false){
      setTimeout(()=>{
        this.lights(next);
      }, duration)
    }
  }

  stopLights(){
    this.stop = true
  }


}
