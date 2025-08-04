import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  imports: [],
  templateUrl: './ejemplo.html',
  styleUrl: './ejemplo.css'
})
export class Ejemplo {
  counterValue:number = 0;
  increseCounter():void {
    this.counterValue++;
  };
}
