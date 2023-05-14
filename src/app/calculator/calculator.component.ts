import { Component } from '@angular/core';
import { Edad } from '../edad';
import * as moment from 'moment';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  day: number | null = null;
  month: number | null = null;
  year: number | null = null;
  edad: Edad = { dias: '--', meses: '--', anios: '--' };

  constructor() {}

  calculate() {
    this.validate()
    if (this.day !== null && this.month !== null && this.year !== null) {
      let birthDate = new Date(`${this.year}-${this.month}-${this.day}`);
      let actualAge = Date.now() - birthDate.getTime();
      let ageDate = new Date(actualAge); // convertir a fecha
      let ageYears = ageDate.getUTCFullYear() - 1970;
      let ageMonths = ageDate.getUTCMonth();
      let ageDays = ageDate.getUTCDate() - 1; // restar 1 día para corregir el desfase de la conversión a milisegundos

      this.showDate(ageDays, ageMonths, ageYears);
    }
  }

  showDate(ageDays: number, ageMonths: number, ageYears: number) {
    this.edad = {
      dias: ageDays,
      meses: ageMonths,
      anios: ageYears,
    };
  }

  validate(){
    if (this.day !== null && this.month !== null && this.year !== null) {
      if(this.day > 31){
        
      }
    }
  }
}
